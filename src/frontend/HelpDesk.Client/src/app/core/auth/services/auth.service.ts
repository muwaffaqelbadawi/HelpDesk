import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../business/model/api-response';
import { LoginRequest } from '../../../features/auth/login/login-request';
import { LoginResponse } from '../../../features/auth/login/login-response';
import { environment } from '../../../../environments/environment';
import { changePasswordRequest } from '../../../features/auth/change-password/change-password-request';
import { changePasswordResponse } from '../../../features/auth/change-password/change-password-response';
import { RefreshTokenResponse } from '../../../features/auth/refresh-token/refresh-token-response';
import { resetPasswordResponse } from '../../../features/auth/reset-password/reset-password-response';
import { resetPasswordRequest } from '../../../features/auth/reset-password/reset-password-request';
import { LogoutResponse } from '@/features/auth/logout/logout-response';
import { LogoutAllResponse } from '@/features/auth/logout-all/logout-all-response';
import { TerminateUserSessionsResponse } from '@/features/auth/terminate-user-sessions/terminate-user-sessions-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  login(request: LoginRequest)
    : Observable<ApiResponse<LoginResponse>> {
    return this.http
      .post<ApiResponse<LoginResponse>>(
        `${environment.apiUrl}/auth/login`,
        {
          username: request.username,
          password: request.password,
          staySignedIn: request.staySignedIn,
        },
      );
  }

  refreshToken(): Observable<ApiResponse<RefreshTokenResponse>> {
    return this.http.post<ApiResponse<RefreshTokenResponse>>(
      `${environment.apiUrl}/auth/refresh-token`,
      null,
    );
  }

  resetPassword(request: resetPasswordRequest)
    : Observable<ApiResponse<resetPasswordResponse>> {
    return this.http
      .post<ApiResponse<resetPasswordResponse>>(
        `${environment.apiUrl}/auth/reset-password`,
        request,
      );
  }

  changePassword(request: changePasswordRequest)
    : Observable<ApiResponse<changePasswordResponse>> {
    return this.http
      .post<ApiResponse<changePasswordResponse>>(
        `${environment.apiUrl}/auth/change-password`,
        request,
      );
  }

  logout(): Observable<ApiResponse<LogoutResponse>> {
    return this.http
      .post<ApiResponse<LogoutResponse>>(
        `${environment.apiUrl}/auth/logout`,
        null,
      );
  }

  logoutAll(): Observable<ApiResponse<LogoutAllResponse>> {
    return this.http
      .post<ApiResponse<LogoutAllResponse>>(
        `${environment.apiUrl}/auth/logout-all`,
        null,
      );
  }

  terminateUserSessions()
    : Observable<ApiResponse<TerminateUserSessionsResponse>> {
    return this.http
      .post<ApiResponse<TerminateUserSessionsResponse>>(
        `${environment.apiUrl}/auth/logout-all`,
        null,
      );
  }
}
