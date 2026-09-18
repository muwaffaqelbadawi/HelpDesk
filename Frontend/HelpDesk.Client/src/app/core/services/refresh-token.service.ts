import { Injectable, inject } from '@angular/core';
import { Observable, finalize, map, shareReplay } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RefreshTokenResponse } from '../../features/auth/refresh-token/refresh-token-response';
import { ApiResponse } from '../http/models/api-response';

@Injectable({
  providedIn: 'root',
})
export class TokenRefreshService {
  private readonly authService = inject(AuthService);

  private refreshRequest$: Observable<RefreshTokenResponse> | null = null;

  refresh(): Observable<RefreshTokenResponse> {
    if (!this.refreshRequest$) {
      this.refreshRequest$ = this.authService.refreshToken().pipe(
        map((response: ApiResponse<RefreshTokenResponse>) => {
          if (!response.data) {
            throw new Error('Token refresh returned no response data.');
          }

          return response.data;
        }),
        shareReplay(1),
        finalize(() => {
          this.refreshRequest$ = null;
        }),
      );
    }

    return this.refreshRequest$;
  }
}
