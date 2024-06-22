import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MultiSelectComponent} from "../../../base/multi-select/multi-select.component";
import {SelectionComponent} from "../../../base/selection/selection.component";
import {NgForOf} from "@angular/common";
import {PaginationComponent} from "../../../base/pagination/pagination.component";
import {TooltipDirective} from "@coreui/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-advertisement-management',
  standalone: true,
  imports: [
    FormsModule,
    MultiSelectComponent,
    ReactiveFormsModule,
    SelectionComponent,
    NgForOf,
    PaginationComponent,
    TooltipDirective
  ],
  templateUrl: './advertisement-management.component.html',
  styleUrl: './advertisement-management.component.scss'
})
export class AdvertisementManagementComponent implements OnInit {
  form: any;

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
    this.form = this.fb.group({name: ['', [Validators.required]]})
  }


  onSearch() {
    console.log(this.form.value)
  }

  onCreate() {
    this.router.navigate(['admin/advertisement-management/create']);
  }

  onDetail(item: any) {
    this.router.navigate([`admin/advertisement-management/update/${item.id}`]);
  }


}
