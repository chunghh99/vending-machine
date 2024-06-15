import {NgForOf, NgStyle} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,
  TextColorDirective
} from '@coreui/angular';
import {ChartjsComponent} from '@coreui/angular-chartjs';
import {IconDirective} from '@coreui/icons-angular';

import {SpinnerService} from "../../services/spinner.service";
import {PaginationComponent} from "../base/pagination/pagination.component";

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, CardHeaderComponent, TableDirective, AvatarComponent, NgForOf, PaginationComponent]
})
export class DashboardComponent implements OnInit {

  users = [
    { id: 1, firstName: 'JohnddddddddddddddddddddddddddddJohnddddddddddddddddddddddddddddJohnddddddddddddddddddddddddddddJohnddddddddddddddddddddddddddddJohnddddddddddddddddddddddddddddJohnddddddddddddddddddddddddddddJohndddddddddddddddddddddddddddd', lastName: 'Doe', email: 'john.doe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' },
    { id: 3, firstName: 'Alice', lastName: 'Smith', email: 'alice.smith@example.com' },
    { id: 4, firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com' },
    { id: 5, firstName: 'Emily', lastName: 'Williams', email: 'emily.williams@example.com' }
  ];



  constructor(private spinnerService: SpinnerService) {
  }
  ngOnInit(): void {
    this.spinnerService.show()
    setTimeout(() => {
      this.spinnerService.hide();
    }, 500); // Ví dụ: đợi 2 giây trước khi ẩn spinner
  }




}
