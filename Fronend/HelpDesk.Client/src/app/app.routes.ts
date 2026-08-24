import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { DashboardComponent } from './features/dashboard/dashboard';
import { LogoutComponent } from './features/auth/logout/logout';
import { RefreshTokenComponent } from './features/auth/refresh-token/refresh-token';
import { ChangePasswordComponent } from './features/auth/change-password/change-password';
import { ResetPasswordComponent } from './features/auth/reset-password/reset-password';
import { RegisterComponent } from './features/auth/register/register';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password';
import { RevokeTokenComponent } from './features/auth/revoke-token/revoke-token';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'auth/logout',
    component: LogoutComponent,
  },
  {
    path: 'auth/refresh-token',
    component: RefreshTokenComponent,
  },
  {
    path: 'auth/change-password',
    component: ChangePasswordComponent,
  },
  {
    path: 'auth/reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'auth/revoke-token',
    component: RevokeTokenComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
