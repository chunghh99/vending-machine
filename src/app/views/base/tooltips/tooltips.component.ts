import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TooltipDirective, ButtonDirective } from '@coreui/angular';

@Component({
    selector: 'app-tooltips',
    templateUrl: './tooltips.component.html',
    styleUrls: ['./tooltips.component.scss'],
    standalone: true,
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TooltipDirective, RouterLink, ButtonDirective]
})
export class TooltipsComponent {

  constructor() { }

}
