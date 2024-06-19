import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./advertisement-management.component').then(m => m.AdvertisementManagementComponent),
    data: {
      title: $localize`Quản lý quảng cáo`
    }
  }
];

