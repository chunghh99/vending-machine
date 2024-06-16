import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./create-user.component').then(m => m.CreateUserComponent),
    data: {
      title: $localize`Khai báo user`
    }
  }
];

