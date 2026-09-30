import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenRefreshService } from '../services/refresh-token.service';
import { environment } from '../../../../environments/environment.development';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const request = req.clone({
    withCredentials: true,
  });

  const refreshTokenUrl = `${environment.apiUrl}/auth/refresh-token`;

  if (req.url === refreshTokenUrl) {
    return next(request);
  }

  const tokenRefreshService = inject(TokenRefreshService);

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401) {
        return throwError(() => error);
      }

      return tokenRefreshService.refresh().pipe(switchMap(() => next(request)));
    }),
  );
};
