import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {PaginationComponent} from "../../../base/pagination/pagination.component";
import {TooltipDirective} from "@coreui/angular";
import {SelectionComponent} from "../../../base/selection/selection.component";
import {NgForOf, NgIf} from "@angular/common";
import {dateRangeValidator} from "../../../../core/validation/validation";
import {PriceCampaingService} from "../../../../services/vending-machine/price-campaign.service";
import {Constants} from "../../../../core/constants/constants";
import {SpinnerService} from "../../../../services/spinner.service";

@Component({
  selector: 'app-price-campaign-management',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PaginationComponent,
    TooltipDirective,
    SelectionComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './price-campaign-management.component.html',
  styleUrl: './price-campaign-management.component.scss'
})
export class PriceCampaignManagementComponent implements OnInit {
  form: any;

  itemList = [
    {id: 1, firstName: 'Johnddddddddddddddddddddd', lastName: 'Doe', email: 'john.doe@example.com'},
    {id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com'},
    {id: 3, firstName: 'Alice', lastName: 'Smith', email: 'alice.smith@example.com'},
    {id: 4, firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com'},
    {id: 5, firstName: 'Emily', lastName: 'Williams', email: 'emily.williams@example.com'}
  ];

  itemsDefault: any[] = [];
  itemsAll: any[] = [];
  itemstable: any[] = [];
  totalItem: number = 0;
  currentPage: number = 1;
  itemPerPage: number = 10;

  constructor(private fb: FormBuilder, private router: Router,
              private priceCampaignService: PriceCampaingService,
              private spinnerService: SpinnerService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        name: [''],
        fromDate: '',
        toDate: ''
      },
      {validator: dateRangeValidator()}
    )

    this.getAllPriceCampaigns();


  }

  getAllPriceCampaigns() {
    this.spinnerService.show();
    this.priceCampaignService.getAllPriceCampaign().subscribe((res: any) => {
      console.log('res all device: ', res)
      this.spinnerService.hide();
      if (res && res.status && res.status.code == Constants.STATUS.SUCCESS) {
        res.data.forEach((item: any) => {
          item.value = item.name;
          item.key = item.id;
        })
        this.itemsDefault = res.data;
        this.itemsAll = [...this.itemsDefault];
        this.totalItem = this.itemsAll.length;
        this.calculateItems();
      }
    })
  }

  calculateItems() {
    this.itemstable = this.itemsAll.slice((this.currentPage - 1) * this.itemPerPage, (this.currentPage - 1) * this.itemPerPage + this.itemPerPage)
    console.log('this.itemtable', this.itemstable);
  }

  pageChange(event: any) {
    console.log('event page change: ', event);
    this.currentPage = event;
    this.calculateItems();
  }

  itemPerPageChange(event: any) {
    console.log('itemPerPageChange: ', event);
    this.itemPerPage = event;
    this.calculateItems();
  }



  onSearch() {
    console.log(this.form.value)
  }

  onCreate() {
    this.router.navigate(['admin/price-campaign/create']);
  }

  onDetail(item: any) {
    this.router.navigate([`admin/advertisement-management/update/${item.id}`]);
  }

  get dateRangeInvalid() {
    return this.form.hasError('dateRangeInvalid');
  }


}
