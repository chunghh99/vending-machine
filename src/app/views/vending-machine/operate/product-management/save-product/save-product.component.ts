import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {NgIf} from "@angular/common";
import {NumericCurrencyDirective} from "../../../../../directive/numeric-currency.directive";
import {SpinnerService} from "../../../../../services/spinner.service";
import {ItemsService} from "../../../../../services/vending-machine/item.service";
import {Constants} from "../../../../../core/constants/constants";
import {ToastrService} from "ngx-toastr";
import {convertToNumber} from "../../../../../core/util/util";

@Component({
  selector: 'app-save-product',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NumericCurrencyDirective
  ],
  templateUrl: './save-product.component.html',
  styleUrl: './save-product.component.scss'
})
export class SaveProductComponent implements OnInit {
  formSave: any;
  action: any = 'CREATE';
  previewImages: any;
  param: any;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer,
              private spinnerService: SpinnerService,
              private itemsService: ItemsService,
              private toastr: ToastrService,
  ) {
  }


  ngOnInit(): void {
    this.formSave = this.fb.group({
      productCode: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      slotType: ['', [Validators.required]],
      imageName: ['', [Validators.required]],
      image: [''],
      displayPrice: ['', [Validators.required]],
      inputPrice: ['', [Validators.required]]
    })

    this.route.params.subscribe(params => {
      this.param = params['id'];
      console.log(params, this.param)
      if (this.param) {
        this.getItemDetail(this.param);
      }
    });


    if (this.router.url.includes('/update/')) {
      this.action = 'UPDATE';
      // this.previewImages = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.inmageUpdate}`);
      // console.log(this.inmageUpdate);
      // this.formSave.patchValue({imageName: 'chunghh.jpg'})
      // this.onUpdateFile(this.inmageUpdate, 'chunghh.jpg');
    }
  }

  getItemDetail(id: any) {
    this.spinnerService.show();
    this.itemsService.getItemById(id).subscribe((res: any) => {
      console.log('res getItemById', res);
      this.spinnerService.hide();
      if (res && res.status && res.status.code === Constants.STATUS.SUCCESS
        && res.data
      ) {
        this.formSave.patchValue({
          productCode: res.data.code,
          productName: res.data.name,
          displayPrice: res.data.basePrice,
          inputPrice: res.data.importedPrice,
          imageName: this.getImageName(res.data.image),
          slotType: res.data.type
        })

        this.previewImages = res.data.image;

        console.log('formSave.patchValue', this.formSave.value)
      }
    }, error => {
      this.spinnerService.hide();
    })
  }

  getImageName(imageUrl: string): string | null | undefined {
    if (imageUrl) {
      const segments = imageUrl.split('/');
      return segments.length > 0 ? segments.pop() : null;
    }
    return '';
  }

  // onUpdateFile(content: any, name: any) {
  //   const fileFromServer = new File([`data:image/png;base64 + ${content}`], name);
  //   this.formSave.patchValue({
  //     image: fileFromServer
  //   })
  // }


  onUpdate() {
    console.log(this.formSave.value)
    if (this.formSave.invalid) {
      this.formSave.markAllAsTouched();
      this.formSave.markAsDirty();
      this.formSave.updateValueAndValidity();
      return;
    }

    const formValue = this.formSave.value;

    const request: any = {
      name: formValue.productName,
      basePrice: convertToNumber(formValue.displayPrice),
      importedPrice: convertToNumber(formValue.inputPrice),
      code: formValue.productCode,
      type: formValue.slotType
    };
    if (!this.previewImages.includes('http')) {
      request.imageBase64 = this.previewImages
    }


    this.spinnerService.show();
    this.itemsService.updateItem(request, this.param).subscribe(res => {
      this.spinnerService.hide();
      console.log('response update => ', res)
      if (res && res.status && res.status.code === Constants.STATUS.SUCCESS) {
        this.toastr.success('Cập nhật hàng hóa thành công!', 'Thông báo');
      } else {
        this.toastr.error('Cập nhật hàng hóa thất bại!', 'Thông báo');
      }
    }, error => {
      this.spinnerService.hide()
    })

  }

  onCreate() {
    if (this.formSave.invalid) {
      this.formSave.markAllAsTouched();
      this.formSave.markAsDirty();
      this.formSave.updateValueAndValidity();
      return;
    }
    console.log(this.formSave.value)
    const formValue = this.formSave.value;
    const request: any = {
      name: formValue.productName,
      basePrice: convertToNumber(formValue.displayPrice),
      importedPrice: convertToNumber(formValue.inputPrice),
      code: formValue.productCode,
      type: formValue.slotType
    };
    if (!this.previewImages.includes('http')) {
      request.imageBase64 = this.previewImages
    }

    this.spinnerService.show();
    this.itemsService.createItem(request).subscribe(res => {
      this.spinnerService.hide();
      console.log('response update => ', res)
      if (res && res.status && res.status.code === Constants.STATUS.SUCCESS) {
        this.toastr.success('Thêm mới hàng hóa thành công!', 'Thông báo');
      } else {
        this.toastr.error('Thêm mới hàng hóa thất bại!', 'Thông báo');
      }
    }, error => {
      this.spinnerService.hide()
    })

  }

  onFileChange($event: any) {

    const selectedFiles = $event.target.files;
    console.log('selectedFiles', selectedFiles)

    if (selectedFiles) {
      const file: File | null = selectedFiles.item(0);

      if (file) {
        this.previewImages = '';

        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previewImages = e.target.result;
        };

        reader.readAsDataURL(file);

        this.formSave.patchValue({imageName: file.name})
      }
    }
  }


  validField(field: string): boolean {
    const control = this.formSave.get(field)
    return control.invalid && (control.dirty || control.touched)
  }

  showError(controlName: any, errorName: any) {
    const control = this.formSave.get(controlName);
    return control.hasError(errorName) && control.touched;
  }
}
