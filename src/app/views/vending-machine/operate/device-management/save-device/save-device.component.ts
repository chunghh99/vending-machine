import {Component, OnInit} from '@angular/core';
import {SelectionComponent} from "../../../../base/selection/selection.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {SpinnerService} from "../../../../../services/spinner.service";
import {DeviceService} from "../../../../../services/vending-machine/device.service";
import {PaymentMethodService} from "../../../../../services/vending-machine/paymentMethod.service";
import {Constants} from "../../../../../core/constants/constants";
import {ToastrService} from "ngx-toastr";
import {OnlyNumberDirective} from "../../../../../directive/only-number.directive";
import {ModalConfirmComponent} from "../../../../base/modal-confirm/modal-confirm.component";
import {ModalService} from "../../../../../services/modal.service";

@Component({
  selector: 'app-save-device',
  standalone: true,
  imports: [
    SelectionComponent,
    ReactiveFormsModule,
    NgIf,
    OnlyNumberDirective
  ],
  templateUrl: './save-device.component.html',
  styleUrl: './save-device.component.scss'
})
export class SaveDeviceComponent implements OnInit {
  formSave: any;
  action: any = 'CREATE';
  deviceId: any;


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private spinner: SpinnerService,
              private toast: ToastrService,
              private deviceService: DeviceService,
              private paymentMethodService: PaymentMethodService,
              private modalService: ModalService,
  ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.deviceId = params['id'];
      console.log(params, this.deviceId)
    });

    this.formSave = this.fb.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      slotAmount: ['', [Validators.required]],
      paymentMethodIds: ['', [Validators.required]],
    });


    if (this.router.url.includes('/update/')) {
      this.action = 'UPDATE';
      this.getDeviceById(this.deviceId);
    }

    this.getAllPaymentMethod();
    this.locationList = Constants.LOCATION;
  }

  paymentMethodList: any[] = [];
  locationList: any[] = [];

  getAllPaymentMethod() {
    this.spinner.show();
    this.paymentMethodService.getAllPaymentMethod().subscribe(res => {
      this.spinner.hide();
      if (res && res.status && res.status.code == Constants.STATUS.SUCCESS) {
        res.data.forEach((item: any) => {
          item.value = item.name;
          item.key = item.id;
        })
        this.paymentMethodList = res.data;
        console.log('data payment method: ', this.paymentMethodList);
      }
    })
  }

  getDeviceById(id: any) {
    this.spinner.show();
    this.deviceService.getDeviceById(id).subscribe(res => {
      this.spinner.hide();
      if (res && res.status && res.status.code == Constants.STATUS.SUCCESS) {
        const location = this.locationList.find(data => data.value = res.data.locationText)
        this.formSave.patchValue({
          name: res.data.name,
          location: location.key,
          slotAmount: res.data.slotAmount,
          paymentMethodIds: this.joinPaymentMethodId(res.data.paymentMethods)
        })
      }
      console.log('data devices detail: ', res);
    })
  }

  joinPaymentMethodId(items: any[]): number[] {
    if (items && items.length > 0) {
      return items.map(i => i.id);
    }
    return [];
  }


  onCreate() {
    if (this.formSave.invalid) {
      this.formSave.markAllAsTouched();
      this.formSave.markAsDirty();
      this.formSave.updateValueAndValidity();
      return;
    }

    const formValue = this.formSave.value;
    const location = this.locationList.find(data => data.key === formValue.location)
    const body = {
      name: formValue.name,
      slotAmount: formValue.slotAmount,
      paymentMethodIds: formValue.paymentMethodIds,
      locationText: location.value,
      locationGeo: location.locationGeo,
      rowAmount: 5
    }
    this.spinner.show();
    this.deviceService.createDevice(body).subscribe(res => {
      this.spinner.hide();
      console.log('res create device: ', res);
      if (res && res.status && res.status.code == Constants.STATUS.SUCCESS) {
        this.toast.success('Thêm mới thiết bị thành công!', 'Thông Báo')
      } else {
        this.toast.error('Có lỗi trong quá trình xử lý, xin vui lòng thực hiện lại!', 'Thông Báo')
      }
    })
    console.log('form device', formValue);
  }

  onUpdate() {
    if (this.formSave.invalid) {
      this.formSave.markAllAsTouched();
      this.formSave.markAsDirty();
      this.formSave.updateValueAndValidity();
      return;
    }

    const formValue = this.formSave.value;
    const location = this.locationList.find(data => data.key === formValue.location)
    const body = {
      name: formValue.name,
      slotAmount: formValue.slotAmount,
      paymentMethodIds: formValue.paymentMethodIds,
      locationText: location.value,
      locationGeo: location.locationGeo,
      rowAmount: 5,
      status: 'ACTIVE'
    }
    this.spinner.show();
    this.deviceService.updateDevice(body, this.deviceId).subscribe(res => {
      this.spinner.hide();
      console.log('res create device: ', res);
      if (res && res.status && res.status.code == Constants.STATUS.SUCCESS) {
        this.toast.success('Cập nhật thiết bị thành công!', 'Thông Báo')
      } else {
        this.toast.error('Có lỗi trong quá trình xử lý, xin vui lòng thực hiện lại!', 'Thông Báo')
      }
    })
    console.log('form save update', this.formSave.value)
  }

  onCopy() {
    const modal = this.modalService.open(ModalConfirmComponent, {
      title: 'Xác nhận',
      message: 'Bạn có chắc muốn sao chép thiết bị?'
    });
    modal.componentInstance.confirmed.subscribe((result: boolean) => {
      if (result) {
        // click ok
        this.Copy();
      }
    })
  }

  Copy() {
    if (this.formSave.invalid) {
      this.formSave.markAllAsTouched();
      this.formSave.markAsDirty();
      this.formSave.updateValueAndValidity();
      return;
    }

    const formValue = this.formSave.value;
    const location = this.locationList.find(data => data.key === formValue.location)
    const body = {
      name: formValue.name,
      slotAmount: formValue.slotAmount,
      paymentMethodIds: formValue.paymentMethodIds,
      locationText: location.value,
      locationGeo: location.locationGeo,
      rowAmount: 5
    }
    this.spinner.show();
    this.deviceService.createDevice(body).subscribe(res => {
      this.spinner.hide();
      console.log('res create device: ', res);
      if (res && res.status && res.status.code == Constants.STATUS.SUCCESS) {
        this.toast.success('Sao chép thiết bị thành công!', 'Thông Báo')
      } else {
        this.toast.error('Có lỗi trong quá trình xử lý, xin vui lòng thực hiện lại!', 'Thông Báo')
      }
    })
    console.log('form device', formValue);
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
