import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./features/auth/register/register').then((m) => m.RegisterComponent),
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'auth/forgot-password',
    loadComponent: () =>
      import('./features/auth/forgot-password/forgot-password').then(
        (m) => m.ForgotPasswordComponent,
      ),
  },
  {
    path: 'auth/logout',
    loadComponent: () => import('./features/auth/logout/logout').then((m) => m.LogoutComponent),
  },
  {
    path: 'auth/refresh-token',
    loadComponent: () =>
      import('./features/auth/refresh-token/refresh-token').then((m) => m.RefreshTokenComponent),
  },
  {
    path: 'auth/change-password',
    loadComponent: () =>
      import('./features/auth/change-password/change-password').then(
        (m) => m.ChangePasswordComponent,
      ),
  },
  {
    path: 'auth/reset-password',
    loadComponent: () =>
      import('./features/auth/reset-password/reset-password').then((m) => m.ResetPasswordComponent),
  },
  {
    path: 'auth/revoke-token',
    loadComponent: () =>
      import('./features/auth/revoke-token/revoke-token').then((m) => m.RevokeTokenComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.DashboardComponent),
  },
];
