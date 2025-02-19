import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./device-management.component').then(m => m.DeviceManagementComponent),
    data: {
      title: $localize`Cập nhật hàng hóa`
    }
  },
  {
    path: 'create',
    loadComponent: () => import('./save-device/save-device.component').then(m => m.SaveDeviceComponent),
    data: {
      title: $localize`Thêm mới sản phẩm`
    }
  },
  {
    path: 'update/:id',
    loadComponent: () => import('./save-device/save-device.component').then(m => m.SaveDeviceComponent),
    data: {
      title: $localize`Cập nhật sản phẩm`,
      ACTION: 'UPDATE'
    }
  }
];

