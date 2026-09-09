import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'login',
        loadComponent:(()=>import('./pages/login/login').then((m)=>m.Login))
    },
    {
        path:'dashboard',
        component:Dashboard
    }

];
