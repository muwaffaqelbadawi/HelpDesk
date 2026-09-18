import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponse } from '../http/models/api-response';
import { LoginRequest } from '../../features/auth/login/login-request';
import { LoginResponse } from '../../features/auth/login/login-response';
import { environment } from '../../../environments/environment.development';
import { RefreshTokenResponse } from '../../features/auth/refresh-token/refresh-token-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  // Service (producer)
  login(request: LoginRequest): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(`${environment.apiUrl}/login`, request);
  }

  // Service (producer)
  refreshToken(): Observable<ApiResponse<RefreshTokenResponse>> {
    return this.http.post<ApiResponse<RefreshTokenResponse>>(
      `${environment.apiUrl}/refresh-token`,
      null,
    );
  }
}
