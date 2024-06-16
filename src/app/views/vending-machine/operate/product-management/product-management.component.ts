import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NumericCurrencyDirective} from "../../../../directive/numeric-currency.directive";

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    NumericCurrencyDirective,
    NgIf
  ],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent implements OnInit {
  productForm: any;
  products: any[] = [
    {productName: 'Sản phẩm', quantity: '10', price: '10000'},
    {productName: 'Sản phẩm', quantity: '10', price: '10000'},
    {productName: 'Sản phẩm', quantity: '10', price: '10000'}];


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productList: this.fb.array([])
    });

    // Đổ dữ liệu từ danh sách sản phẩm vào FormArray
    this.products.forEach(product => {
      this.productList.push(this.createProductItem(product));
    });

    console.log(this.productForm.value)
  }

  // Getter để truy cập vào FormArray
  get productList(): any {
    return this.productForm.get('productList') as FormArray;
  }

  // Tạo FormGroup cho mỗi sản phẩm
  createProductItem(product: any): FormGroup {
    return this.fb.group({
      productName: [product.productName],
      quantity: [this.formatCurrency(product.quantity), [Validators.required]],
      price: [this.formatCurrency(product.price), [Validators.required]]
    });
  }

  formatCurrency(value: string): string {
    if (value) {
      return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else return '';
  }

  validField(i: number, controlName: any) {
    return this.productList.controls[i].get(controlName).invalid
      && (this.productList.controls[i].get(controlName).dirty || this.productList.controls[i].get(controlName).touched)

  }

  showError(i: number, controlName: any,errorName: any){
      const quantityControl = this.productList.controls[i].get(controlName);
      return quantityControl.hasError(errorName) && quantityControl.touched;
  }


  onUpdateProduct() {

    console.log('price', this.productList.controls[0].get('price').errors);
    console.log('product form', this.productForm.value);
  }
}
