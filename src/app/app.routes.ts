import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './layout';
import {RedirectRouter} from "./redirect-router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        canActivate: [RedirectRouter],
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'report-transaction/revenue',
        canActivate: [RedirectRouter],
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'operate/device',
        canActivate: [RedirectRouter],
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'operate/product',
        canActivate: [RedirectRouter],
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'customer-care/purchase-history',
        canActivate: [RedirectRouter],
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'admin/user-management',
        canActivate: [RedirectRouter],
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'admin/advertisement-management',
        canActivate: [RedirectRouter],
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'admin/password-management',
        canActivate: [RedirectRouter],
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'admin/lock-account',
        canActivate: [RedirectRouter],
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'admin/unLock-account',
        canActivate: [RedirectRouter],
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {path: '**', redirectTo: '404'} // sai router thi chuyen huong all ve 404
];
