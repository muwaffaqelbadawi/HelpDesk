import { Location } from '@angular/common';
import { ApplicationInitStatus } from '@angular/core';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { environment } from '../environments/environment';
import { authGuard } from './core/auth/guards/auth-guard';
import { guestGuard } from './core/auth/guards/guest.guard';
import { AuthStateService } from './core/auth/services/auth-state.service';
import { RedirectService } from './core/auth/services/redirect.service';
import { UserAccountData } from './shared/responses/user-account-data';
import { appConfig } from './app.config';

describe('app initialization', () => {
  const user: UserAccountData = {
    userId: 'user-id',
    userName: 'user',
    email: 'user@example.com',
    rowVersion: null,
    mustResetPassword: false,
    roles: ['Admin'],
    employee: null,
  };

  function startInitializationAt(path: string) {
    TestBed.configureTestingModule({
      providers: [
        ...appConfig.providers,
        provideHttpClientTesting(),
        { provide: Location, useValue: { path: () => path } },
      ],
    });

    return {
      authState: TestBed.inject(AuthStateService),
      httpTestingController: TestBed.inject(HttpTestingController),
      donePromise: TestBed.inject(ApplicationInitStatus).donePromise,
    };
  }

  afterEach(() => {
    TestBed.inject(HttpTestingController).verify();
  });

  it('defers login-page hydration to the guest guard', async () => {
    const { authState, httpTestingController, donePromise } =
      startInitializationAt('/auth/login');

    await donePromise;

    expect(authState.isHydrated()).toBeFalse();
    httpTestingController.expectNone(`${environment.apiUrl}/users/me`);
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });

  [
    '/auth/login?returnUrl=%2Fdashboard',
    '/auth/login#section',
    '/auth/login/',
  ].forEach((path) => {
    it(`defers hydration for login URL ${path}`, async () => {
      const { authState, httpTestingController, donePromise } = startInitializationAt(path);

      await donePromise;

      expect(authState.isHydrated()).toBeFalse();
      httpTestingController.expectNone(`${environment.apiUrl}/users/me`);
      httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
    });
  });

  it('hydrates current-user state on non-login routes', async () => {
    const { authState, httpTestingController, donePromise } =
      startInitializationAt('/dashboard');

    const currentUserRequest = httpTestingController.expectOne(`${environment.apiUrl}/users/me`);
    expect(currentUserRequest.request.method).toBe('GET');
    currentUserRequest.flush({ data: { userAccountData: user } });

    await donePromise;

    expect(authState.isHydrated()).toBeTrue();
    expect(authState.session()).toEqual({ userAccountData: user });
    expect(authState.isAuthenticated()).toBeTrue();
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });

  it('reuses bootstrap hydration when an authenticated user later navigates to login', async () => {
    const { authState, httpTestingController, donePromise } =
      startInitializationAt('/dashboard');
    const currentUserRequest = httpTestingController.expectOne(`${environment.apiUrl}/users/me`);
    currentUserRequest.flush({ data: { userAccountData: user } });
    await donePromise;

    const redirect = spyOn(TestBed.inject(RedirectService), 'redirect');
    const guardResult = TestBed.runInInjectionContext(() =>
      guestGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );

    expect(guardResult).toBeFalse();
    expect(authState.isAuthenticated()).toBeTrue();
    expect(redirect).toHaveBeenCalledOnceWith();
    httpTestingController.expectNone(`${environment.apiUrl}/users/me`);
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });

  it('clears authentication state when current-user initialization fails', async () => {
    const { authState, httpTestingController, donePromise } =
      startInitializationAt('/dashboard');

    httpTestingController
      .expectOne(`${environment.apiUrl}/users/me`)
      .flush({}, { status: 500, statusText: 'Server Error' });

    await donePromise;

    expect(authState.isHydrated()).toBeTrue();
    expect(authState.isAuthenticated()).toBeFalse();
    expect(authState.session()).toBeNull();
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });

  it('marks backend unavailable when current-user initialization cannot connect', async () => {
    const { authState, httpTestingController, donePromise } =
      startInitializationAt('/dashboard');

    httpTestingController
      .expectOne(`${environment.apiUrl}/users/me`)
      .error(new ProgressEvent('error'));

    await donePromise;

    expect(authState.isHydrated()).toBeTrue();
    expect(authState.backendUnavailable()).toBeTrue();
    expect(authState.isAuthenticated()).toBeFalse();
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });

  it('refreshes once and retries current-user retrieval after an expired access token response', async () => {
    const { authState, httpTestingController, donePromise } =
      startInitializationAt('/dashboard');
    const requestSequence: string[] = [];

    const initialRequest = httpTestingController.expectOne(`${environment.apiUrl}/users/me`);
    expect(initialRequest.request.method).toBe('GET');
    requestSequence.push(`${initialRequest.request.method} ${initialRequest.request.url}`);
    initialRequest.flush({}, { status: 401, statusText: 'Unauthorized' });

    const refreshRequest = httpTestingController.expectOne(
      `${environment.apiUrl}/auth/refresh-token`,
    );
    expect(refreshRequest.request.method).toBe('POST');
    requestSequence.push(`${refreshRequest.request.method} ${refreshRequest.request.url}`);
    refreshRequest.flush({ data: { userAccountData: user } });

    const retryRequest = httpTestingController.expectOne(`${environment.apiUrl}/users/me`);
    expect(retryRequest.request.method).toBe('GET');
    requestSequence.push(`${retryRequest.request.method} ${retryRequest.request.url}`);
    retryRequest.flush({ data: { userAccountData: user } });

    await donePromise;

    expect(requestSequence).toEqual([
      `GET ${environment.apiUrl}/users/me`,
      `POST ${environment.apiUrl}/auth/refresh-token`,
      `GET ${environment.apiUrl}/users/me`,
    ]);
    expect(authState.session()).toEqual({ userAccountData: user });
    expect(authState.isAuthenticated()).toBeTrue();
    httpTestingController.expectNone(`${environment.apiUrl}/users/me`);
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });

  it('clears authentication state after refresh fails and preserves protected-route behavior', async () => {
    const { authState, httpTestingController, donePromise } =
      startInitializationAt('/dashboard');

    httpTestingController
      .expectOne(`${environment.apiUrl}/users/me`)
      .flush({}, { status: 401, statusText: 'Unauthorized' });
    httpTestingController
      .expectOne(`${environment.apiUrl}/auth/refresh-token`)
      .flush({}, { status: 401, statusText: 'Unauthorized' });

    await donePromise;

    expect(authState.isHydrated()).toBeTrue();
    expect(authState.session()).toBeNull();
    expect(authState.isAuthenticated()).toBeFalse();
    const guardResult = TestBed.runInInjectionContext(() =>
      authGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );
    expect(guardResult instanceof UrlTree).toBeTrue();
    if (guardResult instanceof UrlTree) {
      expect(TestBed.inject(Router).serializeUrl(guardResult)).toBe('/auth/login');
    }
    httpTestingController.expectNone(`${environment.apiUrl}/users/me`);
    httpTestingController.expectNone(`${environment.apiUrl}/auth/refresh-token`);
  });
});
