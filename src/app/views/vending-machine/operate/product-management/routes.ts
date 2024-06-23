import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./product-management.component').then(m => m.ProductManagementComponent),
    data: {
      title: $localize`Cập nhật hàng hóa`
    }
  },
  {
    path: 'create',
    loadComponent: () => import('./save-product/save-product.component').then(m => m.SaveProductComponent),
    data: {
      title: $localize`Thêm mới sản phẩm`
    }
  },
  {
    path: 'update/:id',
    loadComponent: () => import('./save-product/save-product.component').then(m => m.SaveProductComponent),
    data: {
      title: $localize`Cập nhật sản phẩm`,
      ACTION: 'UPDATE'
    }
  }
];

