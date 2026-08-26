import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ApiResponse } from '../../http/models/api-response';
import { LoginRequest } from '../../../features/auth/login/login-request';
import { LoginResponse } from '../../../features/auth/login/login-response';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<ApiResponse<LoginResponse>>(`${environment.apiUrl}/login`, request).pipe(
      map((response) => {
        if (!response.data) {
          throw new Error('Login response did not contain user account data.');
        }

        return response.data;
      }),
    );
  }
}
