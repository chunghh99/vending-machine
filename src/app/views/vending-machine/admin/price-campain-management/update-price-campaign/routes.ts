import {Routes} from '@angular/router';
import {$localize} from "@angular/localize/init";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./update-price-campaign.component').then(m => m.UpdatePriceCampaignComponent),
    data: {
      title: $localize`Cập nhật campaign giá`
    }
  }
];

