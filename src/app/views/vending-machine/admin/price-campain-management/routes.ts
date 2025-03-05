import {Routes} from '@angular/router';
import {$localize} from "@angular/localize/init";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./price-campaign-management.component').then(m => m.PriceCampaignManagementComponent),
    data: {
      title: $localize`Quản lý quảng cáo`
    }
  },
  {
    path: 'create',
    loadComponent: () => import('./save-price-campaign/save-price-campaign.component').then(m => m.SavePriceCampaignComponent),
    data: {
      title: $localize`Thêm mới quảng cáo`
    }
  },
  {
    path: 'update/:id',
    loadComponent: () => import('./save-price-campaign/save-price-campaign.component').then(m => m.SavePriceCampaignComponent),
    data: {
      title: $localize`Cập nhật quảng cáo`,
      ACTION: 'UPDATE'
    }
  }
];

