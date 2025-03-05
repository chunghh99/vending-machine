import {Routes} from '@angular/router';
import {$localize} from "@angular/localize/init";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./save-price-campaign.component').then(m => m.SavePriceCampaignComponent),
    data: {
      title: $localize`Thêm mới price campaign`
    }
  }
];

