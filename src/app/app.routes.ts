import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './layout';
import {ActivateRouter} from "./activate-router";

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
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes),
        canActivate: [ActivateRouter]
      },
      {
        path: 'report-transaction/revenue',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes),
        canActivate: [ActivateRouter]
      },
      {
        path: 'operate/device',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes),
        canActivate: [ActivateRouter]
      },
      {
        path: 'operate/product',
        loadChildren: () => import('./views/vending-machine/operate/product-management/routes').then((m) => m.routes),
        canActivate: [ActivateRouter]
      },
      {
        path: 'customer-care/purchase-history',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes),
        canActivate: [ActivateRouter]
      },
      {
        path: 'admin/create-user',
        loadChildren: () => import('./views/vending-machine/admin/create-user/routes').then((m) => m.routes),
        canActivate: [ActivateRouter]
      },
      {
        path: 'admin/advertisement-management',
        loadChildren: () => import('./views/vending-machine/admin/advertisement-management/routes').then((m) => m.routes),
        canActivate: [ActivateRouter]
      },
      {
        path: 'admin/reset-password',
        loadChildren: () => import('./views/vending-machine/admin/reset-password/routes').then((m) => m.routes),
        canActivate: [ActivateRouter]
      },
      {
        path: 'admin/lock-account',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes),
        canActivate: [ActivateRouter]
      },
      {
        path: 'admin/unLock-account',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes),
        canActivate: [ActivateRouter]
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
