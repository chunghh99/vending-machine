import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./advertisement-management.component').then(m => m.AdvertisementManagementComponent),
    data: {
      title: $localize`Quản lý quảng cáo`
    }
  },
  {
    path: 'create',
    loadComponent: () => import('./save-advertisement/save-advertisement.component').then(m => m.SaveAdvertisementComponent),
    data: {
      title: $localize`Thêm mới quảng cáo`
    }
  },
  {
    path: 'update/:id',
    loadComponent: () => import('./save-advertisement/save-advertisement.component').then(m => m.SaveAdvertisementComponent),
    data: {
      title: $localize`Cập nhật quảng cáo`,
      ACTION: 'UPDATE'
    }
  }
];

