import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {SelectionComponent} from "../../../base/selection/selection.component";
import {PaginationComponent} from "../../../base/pagination/pagination.component";
import {TooltipDirective} from "@coreui/angular";
import {Router} from "@angular/router";
import {ItemsService} from "../../../../services/vending-machine/item.service";
import {Constants} from "../../../../core/constants/constants";
import {SpinnerService} from "../../../../services/spinner.service";
import {CommaSeparatedPipe} from "../../../../pipes/comma-separated.pipe";
import {ModalService} from "../../../../services/modal.service";
import {ModalConfirmComponent} from "../../../base/modal-confirm/modal-confirm.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    SelectionComponent,
    PaginationComponent,
    TooltipDirective,
    CommaSeparatedPipe
  ],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent implements OnInit {
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

  itemsDefault: any[] = [];
  itemsAll: any[] = [];
  itemstable: any[] = [];
  totalItem: number = 0;
  currentPage: number = 1;
  itemPerPage: number = 10;


  constructor(private fb: FormBuilder, private router: Router,
              private itemService: ItemsService,
              private spinnerService: SpinnerService,
              private modalService: ModalService,
              private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {

    this.formSearch = this.fb.group({
      productName: ['']
    })

    this.getAllItems();

    // this.productForm = this.fb.group({
    //   productList: this.fb.array([])
    // });
    //
    // // Đổ dữ liệu từ danh sách sản phẩm vào FormArray
    // this.products.forEach(product => {
    //   this.productList.push(this.createProductItem(product));
    // });

    // console.log(this.productForm.value)
  }

  getAllItems() {
    this.spinnerService.show();
    this.itemService.getAllItem().subscribe(res => {
      console.log('item res: ', res)
      this.spinnerService.hide();
      if (res && res.status && res.status.code === Constants.STATUS.SUCCESS
        && res.data && res.data.length > 0
      ) {
        res.data.forEach((item: any) => {
          item.value = item.name;
          item.key = item.id;
        })
        this.itemsDefault = res.data.filter((item: any) => {
          return item.status === Constants.ITEM_STATUS.ACTIVE
        });
        this.itemsAll = [...this.itemsDefault];
        this.totalItem = this.itemsAll.length;
        this.calculateItems();
        console.log('this.itemsActive: ', this.itemsAll)
      }
    }, error => {
      this.spinnerService.hide();
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
    this.currentPage = 1;
    const arrSearch = this.formSearch.value.productName || [];
    if (arrSearch && arrSearch.length > 0) {
      console.log('arrSearch: ', arrSearch)
      this.itemsAll = this.itemsAll.filter((data: any) => {
        return arrSearch.includes(data.id);
      });
    } else {

      console.log('arrSearch not ok', arrSearch)
      this.itemsAll = [...this.itemsDefault];
    }

    console.log('data after search: ', this.itemsAll, this.itemsDefault)
    this.totalItem = this.itemsAll.length;
    this.calculateItems();
  }

  onCreate() {
    this.router.navigate(['operate/product/create']);
  }

  onDetail(item: any) {
    this.router.navigate([`operate/product/update/${item.id}`]);
  }

  convertType(type: string): string {
    if (type === Constants.ITEM_TYPE.SINGLE.code) {
      return Constants.ITEM_TYPE.SINGLE.name;
    }
    return Constants.ITEM_TYPE.DOUBLE.name;
  }


  onDelete(item: any) {
    console.log('delete item', item)
    const modal = this.modalService.open(ModalConfirmComponent, {
      title: 'Xác nhận',
      message: 'Bạn có chắc muốn xóa hàng hóa?'
    });
    modal.componentInstance.confirmed.subscribe((result: boolean) => {
      if (result) {
        // click ok
        this.delete(item.id);
      }
    })
  }

  delete(id: any) {
    this.spinnerService.show();
    this.itemService.deleteItem(id).subscribe(res => {
      this.spinnerService.hide();
      if (res && res.status && res.status.code === Constants.STATUS.SUCCESS
        && res.data
      ) {
        this.toastr.success('Xóa hàng hóa thành công!', 'Thông báo');
        this.formSearch = this.fb.group({
          productName: ['']
        })

        this.getAllItems();
      } else {
        this.toastr.success('Xóa hàng hóa thất bại!', 'Thông báo');
      }
    }, error => {
      this.spinnerService.hide()
    })
  }


  //
  // // Getter để truy cập vào FormArray
  // get productList(): any {
  //   return this.productForm.get('productList') as FormArray;
  // }
  //
  // // Tạo FormGroup cho mỗi sản phẩm
  // createProductItem(product: any): FormGroup {
  //   return this.fb.group({
  //     productName: [product.productName],
  //     quantity: [this.formatCurrency(product.quantity), [Validators.required]],
  //     price: [this.formatCurrency(product.price), [Validators.required]]
  //   });
  // }
  //
  // formatCurrency(value: string): string {
  //   if (value) {
  //     return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //   } else return '';
  // }
  //
  // validField(i: number, controlName: any) {
  //   return this.productList.controls[i].get(controlName).invalid
  //     && (this.productList.controls[i].get(controlName).dirty || this.productList.controls[i].get(controlName).touched)
  //
  // }
  //
  // showError(i: number, controlName: any,errorName: any){
  //     const quantityControl = this.productList.controls[i].get(controlName);
  //     return quantityControl.hasError(errorName) && quantityControl.touched;
  // }


  onUpdateProduct() {

    // console.log('price', this.productList.controls[0].get('price').errors);
    // console.log('product form', this.productForm.value);
  }


  protected readonly event = event;
}
