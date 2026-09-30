import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'auth/refresh-token',
    loadComponent: () =>
      import('./features/auth/refresh-token/refresh-token').then(
        (m) => m.RefreshTokenComponent,
      ),
  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./features/home/home').then((m) => m.HomeComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then((m) => m.DashboardComponent),
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
        path: 'auth/change-password',
        loadComponent: () =>
          import('./features/auth/change-password/change-password').then(
            (m) => m.ChangePasswordComponent,
          ),
      },
      {
        path: 'auth/reset-password',
        loadComponent: () =>
          import('./features/auth/reset-password/reset-password').then(
            (m) => m.ResetPasswordComponent,
          ),
      },
      {
        path: 'auth/revoke-token',
        loadComponent: () =>
          import('./features/auth/revoke-token/revoke-token').then((m) => m.RevokeTokenComponent),
      },
      {
        path: 'admin/users',
        loadComponent: () =>
          import('./features/users/user-account/get-all/get-all-users').then(
            (m) => m.GetAllUsersComponent,
          ),
      },
      {
        path: 'admin/users/:id',
        loadComponent: () =>
          import('./features/users/user-account/get-by-id/get-by-id-user').then(
            (m) => m.GetByIdUserComponent,
          ),
      },
      {
        path: 'admin/users/create',
        loadComponent: () =>
          import('./features/users/user-account/create/create-user-account').then(
            (m) => m.CreateUserAccountComponent,
          ),
      },
      {
        path: 'admin/users/Update',
        loadComponent: () =>
          import('./features/users/user-account/update/update-user-account').then(
            (m) => m.UpdateUserAccountComponent,
          ),
      },
      {
        path: 'admin/users/delete',
        loadComponent: () =>
          import('./features/users/user-account/delete/delete-user-account').then(
            (m) => m.DeleteUserAccountComponent,
          ),
      },
      {
        path: 'admin/tickets',
        loadComponent: () =>
          import('./features/tickets/get-all/get-all-tickets').then(
            (m) => m.GetAllTicketsComponent,
          ),
      },
      {
        path: 'admin/tickets/:id',
        loadComponent: () =>
          import('./features/tickets/get-by-id/get-by-id-ticket').then(
            (m) => m.GetByIdTicketComponent,
          ),
      },
      {
        path: 'admin/tickets/create',
        loadComponent: () =>
          import('./features/tickets/create/create-ticket').then((m) => m.CreateTicketComponent),
      },
      {
        path: 'tickets',
        loadComponent: () =>
          import('./features/tickets/get-owned/get-my-tickets').then(
            (m) => m.GetMyTicketsComponent,
          ),
      },
      {
        path: 'admin/tickets/assign',
        loadComponent: () =>
          import('./features/tickets/assign/assign-ticket').then((m) => m.AssignTicketComponent),
      },
      {
        path: 'admin/tickets/update',
        loadComponent: () =>
          import('./features/tickets/update/update-ticket').then((m) => m.UpdateTicketComponent),
      },
      {
        path: 'admin/tickets/delete',
        loadComponent: () =>
          import('./features/tickets/delete/delete-ticket').then((m) => m.DeleteTicketComponent),
      },
    ],
  },
];
