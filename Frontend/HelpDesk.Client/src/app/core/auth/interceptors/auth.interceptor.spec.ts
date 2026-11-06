import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { authInterceptor } from './auth.interceptor';
import { TokenRefreshService } from '../services/refresh-token.service';

describe('authInterceptor', () => {
  let http: HttpClient;
  let httpTestingController: HttpTestingController;
  let refresh: jasmine.Spy;

  beforeEach(() => {
    refresh = jasmine.createSpy().and.returnValue(of({}));

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
        { provide: TokenRefreshService, useValue: { refresh } },
      ],
    });

    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('does not refresh after a login 401 and still sends credentials', () => {
    http.post(`${environment.apiUrl}/auth/login`, {}).subscribe({
      error: (error) => expect(error.status).toBe(401),
    });

    const request = httpTestingController.expectOne(`${environment.apiUrl}/auth/login`);
    expect(request.request.withCredentials).toBeTrue();
    request.flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(refresh).not.toHaveBeenCalled();
  });

  it('does not recursively refresh a rejected refresh-token request', () => {
    http.post(`${environment.apiUrl}/auth/refresh-token`, null).subscribe({
      error: (error) => expect(error.status).toBe(401),
    });

    const request = httpTestingController.expectOne(
      `${environment.apiUrl}/auth/refresh-token`,
    );
    expect(request.request.withCredentials).toBeTrue();
    request.flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(refresh).not.toHaveBeenCalled();
  });

  it('refreshes once after another request gets a 401 and retries with credentials', () => {
    http.get(`${environment.apiUrl}/users/me`).subscribe();

    const initialRequest = httpTestingController.expectOne(`${environment.apiUrl}/users/me`);
    expect(initialRequest.request.withCredentials).toBeTrue();
    initialRequest.flush({}, { status: 401, statusText: 'Unauthorized' });

    expect(refresh).toHaveBeenCalledOnceWith();

    const retryRequest = httpTestingController.expectOne(`${environment.apiUrl}/users/me`);
    expect(retryRequest.request.withCredentials).toBeTrue();
    retryRequest.flush({ data: {} });
  });
});
