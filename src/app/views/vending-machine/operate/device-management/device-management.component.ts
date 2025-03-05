import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PaginationComponent} from "../../../base/pagination/pagination.component";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {SelectionComponent} from "../../../base/selection/selection.component";
import {Router} from "@angular/router";
import {DeviceService} from "../../../../services/vending-machine/device.service";
import {Constants} from "../../../../core/constants/constants";
import {SpinnerService} from "../../../../services/spinner.service";
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

  itemList: any[] = [];

  itemsDefault: any[] = [];
  itemsAll: any[] = [];
  itemstable: any[] = [];
  totalItem: number = 0;
  currentPage: number = 1;
  itemPerPage: number = 10;

  locationList: any[] = [];



  constructor(private fb: FormBuilder, private router: Router,
              private deviceService: DeviceService,
              private spinnerService: SpinnerService
  ) {
  }

  ngOnInit(): void {

    this.formSearch = this.fb.group({
      deviceName: [''],
      place: ['']
    });

    this.getAlldevice();

    this.locationList = Constants.LOCATION;
  }

  getAlldevice() {
    this.spinnerService.show();
    this.deviceService.getAllDevice().subscribe((res: any) => {
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

  joinSlotCode(item: any, type: any): string {
    const listSlot: any[] = item?.slots;
    if (listSlot && listSlot.length > 0) {
      return listSlot
        .filter(slot => slot.currentItem.type === type)
        .map(slot => slot.currentItem.code).join(", ");
    }
    return '';
  }

  joinSlotNumber(item: any, type: any) {
    const listSlot: any[] = item?.slots;
    if (listSlot && listSlot.length > 0) {
      return listSlot.filter(slot => slot.currentItem.type === type).length || 0;
    }
    return 0;
  }

  joinSlotNumberMax(item: any, type: any) {
    const listSlot: any[] = item?.slots;
    if (listSlot && listSlot.length > 0) {
      return listSlot.filter(slot => slot.currentItem.type === type)
        .reduce((total, slot) => total + slot.maxItem, 0) || 0;
    }
    return 0;
  }

  joinPaymentMethod(item: any) {
    const listPaymentMethod: any[] = item?.paymentMethods;
    if (listPaymentMethod && listPaymentMethod.length > 0) {
      return listPaymentMethod.map(paymentMethod => paymentMethod.name).join(", ");
    }
    return '';
  }

  onSearch() {
    this.itemsAll = [...this.itemsDefault];
    this.currentPage = 1;
    const arrSearch = this.formSearch.value.deviceName || [];
    const arrSearchPlace = this.formSearch.value.place || [];
    if ((arrSearch && arrSearch.length) > 0 || (arrSearchPlace && arrSearchPlace.length > 0)) {
      console.log('arrSearch: ', arrSearch)
      console.log('form search value: ', this.formSearch.value)
      this.itemsAll = this.itemsAll.filter((data: any) => {
        return (arrSearch.includes(data.id) || arrSearchPlace.includes(data.locationText));
      });
    }

    console.log('data after search: ', this.itemsAll, this.itemsDefault)
    this.totalItem = this.itemsAll.length;
    this.calculateItems();
  }

  onCreate() {
    this.router.navigate(['operate/device/create']);
  }

  onDetail(item: any) {
    this.router.navigate([`operate/device/update/${item.id}`]);
  }


}
