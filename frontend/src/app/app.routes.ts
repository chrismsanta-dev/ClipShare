import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent),
    canActivate: [LoginGuard],
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then((c) => c.RegisterComponent),
    canActivate: [LoginGuard],
  },
  {
    path: 'account',
    loadComponent: () => import('./pages/account/account.component').then((c) => c.AccountComponent),
    canActivate: [AuthGuard],
  },
];
