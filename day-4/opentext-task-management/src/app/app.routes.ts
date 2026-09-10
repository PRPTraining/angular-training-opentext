import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth-guard';
import { TaskList } from './components/task-list/task-list';
import { NewLogin } from './pages/new-login/new-login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {

    path:'newlogin',
    component:NewLogin
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate:[authGuard]
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path:'tasks',
    component:TaskList,
    canActivate:[authGuard]
  }
];
