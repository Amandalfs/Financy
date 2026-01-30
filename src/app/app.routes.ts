import { Routes } from '@angular/router';
import { login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: login
  },
  {
    path: 'signup',
    component: Signup
  },
  {
    path: 'dashboard',
    component: Dashboard
  }
];