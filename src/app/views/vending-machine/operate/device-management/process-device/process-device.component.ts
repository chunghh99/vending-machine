import {Component, OnInit} from '@angular/core';
import {SelectionComponent} from "../../../../base/selection/selection.component";
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {SpinnerService} from "../../../../../services/spinner.service";
import {DeviceService} from "../../../../../services/vending-machine/device.service";
import {PaymentMethodService} from "../../../../../services/vending-machine/paymentMethod.service";
import {Constants} from "../../../../../core/constants/constants";
import {ToastrService} from "ngx-toastr";
import {ModalService} from "../../../../../services/modal.service";
import {ItemsService} from "../../../../../services/vending-machine/item.service";
import {OnlyNumberDirective} from "../../../../../directive/only-number.directive";
import {SlotService} from "../../../../../services/vending-machine/slot.service";

@Component({
  selector: 'app-process-device',
  standalone: true,
  imports: [
    SelectionComponent,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    OnlyNumberDirective
  ],
  templateUrl: './process-device.component.html',
  styleUrl: './process-device.component.scss'
})
export class ProcessDeviceComponent implements OnInit {
  formSave: any;
  action: any = 'CREATE';
  deviceList: any[] = [];
  itemList: any[] = [];
  slotList: any[] = [];
  deviceListAfterSelect: any[] = [];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private spinner: SpinnerService,
              private toast: ToastrService,
              private deviceService: DeviceService,
              private paymentMethodService: PaymentMethodService,
              private modalService: ModalService,
              private itemService: ItemsService,
              private slotService: SlotService,
  ) {
  }

  ngOnInit(): void {

    this.formSave = this.fb.group({
      location: [''],
      deviceId: ['', [Validators.required]],
      items: this.fb.array([])

    });
    this.locationList = Constants.LOCATION;
    this.getAllDevice();
    this.getAllItems();
    this.getAllSlot();
  }

  // Trả về danh sách FormArray
  get items(): FormArray {
    return this.formSave.get('items') as FormArray;
  }

  locationList: any[] = [];

  getAllDevice() {
    this.spinner.show();
    this.deviceService.getAllDevice().subscribe(res => {
      this.spinner.hide();
      if (res && res.status && res.status.code == Constants.STATUS.SUCCESS) {
        res.data.forEach((item: any) => {
          item.value = item.name;
          item.key = item.id;
        })
        this.deviceListAfterSelect = this.deviceList = res.data;
        console.log('data payment method: ', this.deviceList);
      }
    })
  }

  getAllItems() {
    this.spinner.show();
    this.itemService.getAllItem().subscribe(res => {
      console.log('item res: ', res)
      this.spinner.hide();
      if (res && res.status && res.status.code === Constants.STATUS.SUCCESS
        && res.data && res.data.length > 0
      ) {
        res.data.forEach((item: any) => {
          item.value = item.name;
          item.key = item.id;
        })
        this.itemList = res.data.filter((item: any) => {
          return item.status === Constants.ITEM_STATUS.ACTIVE
        });
      }
    }, error => {
      this.spinner.hide();
    })
  }

  getAllSlot(type?: any) {
    this.spinner.show();
    this.slotService.getAllSlot().subscribe(res => {
      console.log('item res: ', res)
      this.spinner.hide();
      if (res && res.status && res.status.code === Constants.STATUS.SUCCESS
        && res.data && res.data.length > 0
      ) {
        res.data.forEach((item: any) => {
          item.value = item.name;
          item.key = item.id;
        })
        this.slotList = res.data;

        // truong hop khi them moi slot thi thuc hien select device de thuc hien reload lai slot
        if (type && type === 'CREATE') {
          this.onSelectDevice(this.formSave.get('deviceId').value);
        }
      }
    }, error => {
      this.spinner.hide();
    })
  }

  onSelectLocation($event: any) {
    const location = this.locationList.find(data => data.key === $event)
    this.deviceListAfterSelect = this.deviceList.filter(data => data.locationText.includes(location.value));
    console.log('onSelectLocation', $event, this.deviceListAfterSelect)
    this.formSave.get('deviceId').setValue('');
  }

  isUpdate: boolean = false;

  onSelectDevice($event: any) {
    this.formSave.setControl('items', this.fb.array([]));
    const slotList = this.slotList.filter(data => data.deviceId === $event);
    console.log('slotList: ', slotList, $event);
    if (slotList && slotList.length > 0) {
      slotList.forEach(data => {
        const item = this.itemList.find(i => i.id === data.currentItemId);
        const newItem: FormGroup = this.fb.group({
          image: [item.image, [Validators.required]],
          currentItemId: [data.currentItemId, [Validators.required]],
          remainingAmount: [data.remainingAmount, [Validators.required, Validators.min(0)]],
          maxItem: [data.maxItem, [Validators.required, Validators.min(0)]],
          type: [item.type],
          id: [data.id]
        });
        this.items.push(newItem);
      })
      this.isUpdate = true;
      return;
    }

    const device = this.deviceList.find(data => data.id === $event);
    console.log('onSelectDevice', $event, device)
    for (let i = 0; i < device.slotAmount; i++) {
      const newItem: FormGroup = this.fb.group({
        image: ['', [Validators.required]],
        currentItemId: ['', [Validators.required]],
        remainingAmount: ['', [Validators.required, Validators.min(0)]],
        maxItem: ['', [Validators.required, Validators.min(0)]],
        type: ['']
      });
      this.items.push(newItem);
    }
    this.isUpdate = false;

  }

  onItemSelected(selectedItemId: any, index: number) {
    const itemsArray = this.formSave.get('items') as FormArray;
    const selectedItem = this.itemList.find(item => item.id === selectedItemId);

    if (selectedItem) {
      // Cập nhật giá trị hình ảnh vào FormArray
      itemsArray.at(index).patchValue({image: selectedItem.image, type: selectedItem.type});
    }
  }

  convertFormToBody(customKeys: { [key: string]: string }): any[] {
    const itemsArray = this.formSave.get('items') as FormArray;
    return itemsArray.controls.map(control => {
      const formValue = control.value;

      // Tạo object với key động theo customKeys
      let formattedItem: any = {};
      Object.keys(customKeys).forEach(key => {
        formattedItem[customKeys[key]] = formValue[key];
      });

      return formattedItem;
    });
  }

  onUpdate() {
    console.log('form save update', this.formSave.value)
    if (this.formSave.invalid) {
      this.formSave.markAllAsTouched();
      this.formSave.markAsDirty();
      this.formSave.updateValueAndValidity();
      return;
    }
    let customKeys = {
      currentItemId: 'currentItemId',
      remainingAmount: 'remainingAmount',
      maxItem: 'maxItem',
      type: 'type',
    };
    if (this.isUpdate) {
      Object.assign(customKeys, {id: 'id'});
    }

    const body: any[] = this.convertFormToBody(customKeys);
    body.forEach(data => {
      data.rowNumber = 1;
      data.columnNumber = 1;
      data.displayId = 'A1';
      data.remainingAmount = Number(data.remainingAmount);
      data.maxItem = Number(data.maxItem);
    });

    console.log('body', body);

    if (this.isUpdate) {
      this.updateSlot(body, this.formSave.get('deviceId').value);
    } else {
      this.createSlot(body, this.formSave.get('deviceId').value);
    }
  }

  createSlot(body: any, deviceId: any) {
    this.spinner.show();
    this.slotService.createSlot(body, deviceId).subscribe(res => {
      console.log('res createSlot', res)
      this.spinner.hide();
      if (res && res.status && res.status.code === Constants.STATUS.SUCCESS
      ) {
        this.toast.success('Cập nhật thành công', 'Thông báo');
        this.getAllSlot('CREATE');
      } else {
        this.toast.error('Cập nhật thất bại', 'Thông báo');
      }
    }, error => {
      this.spinner.hide();
    });

  }

  updateSlot(body: any, deviceId: any) {
    this.spinner.show();
    this.slotService.replaceAllByDeviceId(body, deviceId).subscribe(res => {
      console.log('res updateSlot', res)
      this.spinner.hide();
      if (res && res.status && res.status.code === Constants.STATUS.SUCCESS
      ) {
        this.toast.success('Cập nhật thành công', 'Thông báo');
        this.getAllSlot();
      } else {
        this.toast.error('Cập nhật thất bại', 'Thông báo');
      }
    }, error => {
      this.spinner.hide();
    });

  }

  validField(field: string): boolean {
    const control = this.formSave.get(field)
    return control.invalid && (control.dirty || control.touched)
  }

  showError(controlName: any, errorName: any) {
    const control = this.formSave.get(controlName);
    return control.hasError(errorName) && control.touched;
  }

  showErrorArray(arrayName: string, index: number, controlName: string, errorName: string): boolean {
    const formArray = this.formSave.get(arrayName) as FormArray;
    if (!formArray) return false; // Kiểm tra nếu formArray chưa được khởi tạo

    const control = formArray.at(index)?.get(controlName);
    return control ? control.hasError(errorName) && control.touched : false;
  }

}
