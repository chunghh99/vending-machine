import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PaginationComponent} from "../../../base/pagination/pagination.component";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {SelectionComponent} from "../../../base/selection/selection.component";
import {Router} from "@angular/router";
import {TooltipDirective} from "@coreui/angular";

@Component({
  selector: 'app-device-management',
  standalone: true,
  imports: [
    NgForOf,
    PaginationComponent,
    ReactiveFormsModule,
    SelectionComponent,
    TooltipDirective
  ],
  templateUrl: './device-management.component.html',
  styleUrl: './device-management.component.scss'
})
export class DeviceManagementComponent implements OnInit {
  formSearch: any;
  products: any[] = [
    {productName: 'Sản phẩm', quantity: '10', price: '10000'},
    {productName: 'Sản phẩm', quantity: '10', price: '10000'},
    {productName: 'Sản phẩm', quantity: '10', price: '10000'}];

  itemList = [
    {id: 1, firstName: 'Johnddddddddddddddddddddd', lastName: 'Doe', email: 'john.doe@example.com'},
    {id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com'},
    {id: 3, firstName: 'Alice', lastName: 'Smith', email: 'alice.smith@example.com'},
    {id: 4, firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com'},
    {id: 5, firstName: 'Emily', lastName: 'Williams', email: 'emily.williams@example.com'}
  ];


  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {

    this.formSearch = this.fb.group({
      deviceName: [''],
      place: ['']
    })
  }


  onSearch() {

  }

  onCreate() {
    this.router.navigate(['operate/device/create']);
  }

  onDetail(item: any) {
    this.router.navigate([`operate/product/update/${item.id}`]);
  }


}
