import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('sends identity as the backend login username', () => {
    authService
      .login({ username: 'person@example.com', password: 'password' })
      .subscribe();

    const request = httpTestingController.expectOne(
      'https://localhost:7082/api/auth/login',
    );

    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({
      username: 'person@example.com',
      password: 'password',
      staySignedIn: false,
    });

    request.flush({ data: {} });
  });
});
