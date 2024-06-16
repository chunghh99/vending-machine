import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./product-management.component').then(m => m.ProductManagementComponent),
    data: {
      title: $localize`Cập nhật hàng hóa`
    }
  }
];

