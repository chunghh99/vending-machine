import { Routes } from '@angular/router';
import {$localize} from "@angular/localize/init";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./process-device.component').then(m => m.ProcessDeviceComponent),
    data: {
      title: $localize`Vận hành thiết bị`
    }
  },
];

