import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NumericCurrencyDirective} from "../../../../directive/numeric-currency.directive";
import {SelectionComponent} from "../../../base/selection/selection.component";
import {PaginationComponent} from "../../../base/pagination/pagination.component";
import {TooltipDirective} from "@coreui/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    NumericCurrencyDirective,
    NgIf,
    SelectionComponent,
    PaginationComponent,
    TooltipDirective
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


  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {

    this.formSearch = this.fb.group({
      productName: ['']
    })
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



  onSearch(){

  }

  onCreate(){
    this.router.navigate(['operate/product/create']);
  }

  onDetail(item: any){
    this.router.navigate([`operate/product/update/${item.id}`]);
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


}
