import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../../http/models/api-response';
import { LoginRequest } from '../../../features/auth/login/login-request';
import { LoginResponse } from '../../../features/auth/login/login-response';
import { environment } from '../../../../environments/environment.development';
import { changePasswordRequest } from '../../../features/auth/change-password/change-password-request';
import { changePasswordResponse } from '../../../features/auth/change-password/change-password-response';
import { RefreshTokenResponse } from '../../../features/auth/refresh-token/refresh-token-response';
import { resetPasswordRequest } from '../../../features/auth/reset-password/reset-password-request';
import { resetPasswordResponse } from '../../../features/auth/reset-password/reset-password-response';
import { CreateUserAccountRequest } from '../../../features/users/user-account/create/create-user-account-request';
import { CreateUserAccountResponse } from '../../../features/users/user-account/create/create-user-account-response';
import { UserAccountData } from '../../../shared/responses/data/user-account-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  getCurrentUser(): Observable<UserAccountData> {
    return this.http
      .get<ApiResponse<UserAccountData>>(
        `${environment.apiUrl}/users/me`,
      )
      .pipe(
        map((response) => {
          if (!response.data) {
            throw new Error('Current user response did not contain user account data.');
          }

          return response.data;
        }),
      );
  }

  createUserAccount(request: CreateUserAccountRequest): Observable<CreateUserAccountResponse> {
    return this.http
      .post<ApiResponse<CreateUserAccountResponse>>(`${environment.apiUrl}/admin/users`, request)
      .pipe(
        map((response) => {
          if (!response.data) {
            throw new Error('Create user account response did not contain user account data.');
          }

          return response.data;
        }),
      );
  }
  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<ApiResponse<LoginResponse>>(`${environment.apiUrl}/auth/login`, request)
      .pipe(
        map((response) => {
          if (!response.data) {
            throw new Error('Login response did not contain user account data.');
          }
          return response.data;
        }),
      );
  }

  refreshToken(): Observable<ApiResponse<RefreshTokenResponse>> {
    return this.http.post<ApiResponse<RefreshTokenResponse>>(
      `${environment.apiUrl}/auth/refresh-token`,
      null,
    );
  }

  resetPassword(request: resetPasswordRequest): Observable<resetPasswordResponse> {
    return this.http
      .post<
        ApiResponse<resetPasswordResponse>
      >(`${environment.apiUrl}/auth/reset-password`, request)
      .pipe(
        map((response) => {
          if (!response.data) {
            throw new Error('reset password response did not contain user account data.');
          }

          return response.data;
        }),
      );
  }

  changePassword(request: changePasswordRequest): Observable<changePasswordResponse> {
    return this.http
      .post<
        ApiResponse<changePasswordResponse>
      >(`${environment.apiUrl}/auth/change-password`, request)
      .pipe(
        map((response) => {
          if (!response.data) {
            throw new Error('change password response did not contain user account data.');
          }

          return response.data;
        }),
      );
  }
}
