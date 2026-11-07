import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { firstValueFrom, isObservable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UserAccountData } from '../../../shared/responses/data/user-account-data';
import { authInterceptor } from '../interceptors/auth.interceptor';
import { AuthStateService } from '../services/auth-state.service';
import { PostLoginRedirectService } from '../services/post-login-redirect.service';
import { guestGuard } from './guest.guard';
import { routes } from '../../../app.routes';

describe('guestGuard', () => {
  const user: UserAccountData = {
    userId: 'user-id',
    userName: 'user',
    email: 'user@example.com',
    rowVersion: null,
    mustResetPassword: false,
    roles: ['User'],
    employee: null,
  };
  let authState: AuthStateService;
  let httpTestingController: HttpTestingController;
  let redirect: jasmine.Spy;

  const executeGuard = () =>
    TestBed.runInInjectionContext(() =>
      guestGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );

  beforeEach(() => {
    redirect = jasmine.createSpy();
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
        { provide: PostLoginRedirectService, useValue: { redirect } },
      ],
    });

    authState = TestBed.inject(AuthStateService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('is registered on the login route', () => {
    const loginRoute = routes.find((route) => route.path === 'auth/login');

    expect(loginRoute?.canActivate).toContain(guestGuard);
  });

  it('allows an already hydrated unauthenticated visitor without making auth requests', () => {
    authState.clearSession();

    expect(executeGuard()).toBeTrue();
    expect(redirect).not.toHaveBeenCalled();
    httpTestingController.expectNone(`${environment.apiUrl}/users/me`);
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });

  it('reuses hydrated authenticated state and delegates the destination', () => {
    authState.setSession(user);

    expect(executeGuard()).toBeFalse();
    expect(redirect).toHaveBeenCalledOnceWith();
    httpTestingController.expectNone(`${environment.apiUrl}/users/me`);
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });

  it('hydrates an unknown session once before allowing an unauthenticated visitor', async () => {
    const result = executeGuard();
    expect(isObservable(result)).toBeTrue();
    if (!isObservable(result)) {
      fail('Expected the guest guard to wait for session hydration.');
      return;
    }
    const guardResult = firstValueFrom(result);

    const currentUserRequest = httpTestingController.expectOne(`${environment.apiUrl}/users/me`);
    expect(currentUserRequest.request.method).toBe('GET');
    currentUserRequest.flush({}, { status: 401, statusText: 'Unauthorized' });

    const refreshRequest = httpTestingController.expectOne(
      `${environment.apiUrl}/auth/refresh-token`,
    );
    expect(refreshRequest.request.method).toBe('POST');
    refreshRequest.flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(await guardResult).toBeTrue();
    expect(authState.isHydrated()).toBeTrue();
    expect(authState.isAuthenticated()).toBeFalse();
    expect(redirect).not.toHaveBeenCalled();
    httpTestingController.expectNone(`${environment.apiUrl}/users/me`);
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });

  it('hydrates an authenticated direct visit and blocks login after one refresh and retry', async () => {
    const result = executeGuard();
    expect(isObservable(result)).toBeTrue();
    if (!isObservable(result)) {
      fail('Expected the guest guard to wait for session hydration.');
      return;
    }

    const guardResult = firstValueFrom(result);
    const requests: string[] = [];
    const currentUserRequest = httpTestingController.expectOne(`${environment.apiUrl}/users/me`);
    expect(currentUserRequest.request.method).toBe('GET');
    requests.push(`${currentUserRequest.request.method} ${currentUserRequest.request.url}`);
    currentUserRequest.flush({}, { status: 401, statusText: 'Unauthorized' });

    const refreshRequest = httpTestingController.expectOne(
      `${environment.apiUrl}/auth/refresh-token`,
    );
    expect(refreshRequest.request.method).toBe('POST');
    requests.push(`${refreshRequest.request.method} ${refreshRequest.request.url}`);
    refreshRequest.flush({ data: { userAccountData: user } });

    const retryRequest = httpTestingController.expectOne(`${environment.apiUrl}/users/me`);
    expect(retryRequest.request.method).toBe('GET');
    requests.push(`${retryRequest.request.method} ${retryRequest.request.url}`);
    retryRequest.flush({ data: { userAccountData: user } });

    expect(await guardResult).toBeFalse();
    expect(requests).toEqual([
      `GET ${environment.apiUrl}/users/me`,
      `POST ${environment.apiUrl}/auth/refresh-token`,
      `GET ${environment.apiUrl}/users/me`,
    ]);
    expect(authState.isAuthenticated()).toBeTrue();
    expect(authState.session()).toEqual({ userAccountData: user });
    expect(redirect).toHaveBeenCalledOnceWith();
    httpTestingController.expectNone(`${environment.apiUrl}/users/me`);
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });

  it('allows login after current-user recovery fails and clears auth state', async () => {
    const result = executeGuard();
    expect(isObservable(result)).toBeTrue();
    if (!isObservable(result)) {
      fail('Expected the guest guard to wait for session hydration.');
      return;
    }
    const guardResult = firstValueFrom(result);

    httpTestingController
      .expectOne(`${environment.apiUrl}/users/me`)
      .flush({}, { status: 401, statusText: 'Unauthorized' });
    httpTestingController
      .expectOne(`${environment.apiUrl}/auth/refresh-token`)
      .flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(await guardResult).toBeTrue();
    expect(authState.isHydrated()).toBeTrue();
    expect(authState.isAuthenticated()).toBeFalse();
    expect(authState.session()).toBeNull();
    expect(redirect).not.toHaveBeenCalled();
    httpTestingController.expectNone(`${environment.apiUrl}/users/me`);
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });
});
