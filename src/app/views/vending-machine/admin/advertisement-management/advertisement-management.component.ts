import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MultiSelectComponent} from "../../../base/multi-select/multi-select.component";
import {SelectionComponent} from "../../../base/selection/selection.component";

@Component({
  selector: 'app-advertisement-management',
  standalone: true,
  imports: [
    FormsModule,
    MultiSelectComponent,
    ReactiveFormsModule,
    SelectionComponent
  ],
  templateUrl: './advertisement-management.component.html',
  styleUrl: './advertisement-management.component.scss'
})
export class AdvertisementManagementComponent {

}
