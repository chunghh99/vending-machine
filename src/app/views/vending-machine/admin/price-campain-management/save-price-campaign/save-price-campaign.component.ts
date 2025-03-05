import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {SelectionComponent} from "../../../../base/selection/selection.component";
import {NgForOf, NgIf} from "@angular/common";
import {ItemsService} from "../../../../../services/vending-machine/item.service";
import {SpinnerService} from "../../../../../services/spinner.service";
import {Constants} from "../../../../../core/constants/constants";
import {DeviceService} from "../../../../../services/vending-machine/device.service";
import {ToastrService} from "ngx-toastr";
import {OnlyNumberDirective} from "../../../../../directive/only-number.directive";
import {PriceCampaingService} from "../../../../../services/vending-machine/price-campaign.service";

@Component({
  selector: 'app-save-price-campaign',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SelectionComponent,
    NgIf,
    NgForOf,
    OnlyNumberDirective
  ],
  templateUrl: './save-price-campaign.component.html',
  styleUrl: './save-price-campaign.component.scss'
})
export class SavePriceCampaignComponent implements OnInit {
  formSave: any;
  action: any = 'CREATE';
  previewImages: any;

  inmageUpdate = '';
  itemList: any[] = [];
  locationList: any[] = [];
  deviceList: any[] = [];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer,
              private itemService: ItemsService,
              private deviceService: DeviceService,
              private spinnerService: SpinnerService,
              private toastr: ToastrService,
              private priceCampaignSerive: PriceCampaingService
  ) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const param = params['id'];
      console.log(params, param)
    });


    this.formSave = this.fb.group({
      name: ['', [Validators.required]],
      locationText: [''],
      deviceIds: ['', [Validators.required]],
      itemId: [''],
      items: this.fb.array([])
    })

    this.getAllItems();
    this.getAlldevice();
    this.locationList = Constants.LOCATION;
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
        this.itemList = res.data.filter((item: any) => {
          return item.status === Constants.ITEM_STATUS.ACTIVE
        });
      }
    }, error => {
      this.spinnerService.hide();
    })
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
        this.deviceList = res.data;
      }
    })
  }


  // Trả về danh sách FormArray
  get items(): FormArray {
    return this.formSave.get('items') as FormArray;
  }

  // Thêm một hàng mới vào bảng
  addItem(data: any) {
    const newItem: FormGroup = this.fb.group({
      itemId: [data.id, Validators.required],
      displayPrice: ['', [Validators.required]],
      discountPercent: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      discountPrice: [''],
      itemName: [data.name],
      image: [data.image],

    });

    this.items.push(newItem);
  }

  onAddItem() {
    // check xem mat hang da co trong arr hay chua
    const itemId = this.formSave.get('itemId').value;
    if (!itemId) {
      this.toastr.warning('Bạn chưa chọn mặt hàng! ', 'Thông báo');
      return;
    }
    const items: any[] = this.formSave.get('items').value;
    if (items && items.length > 0) {
      const item = items.find(i => i.itemId === itemId);
      if (item) {
        this.toastr.warning('Mặt hàng đã được lựa chọn trên danh sách! ', 'Thông báo');
        return;
      }
    }
    const item = this.itemList.find(i => i.id === itemId);
    this.addItem(item)
  }


  onCreate() {
    console.log(this.formSave.value)
    if (this.formSave.invalid) {
      this.formSave.markAllAsTouched();
      this.formSave.markAsDirty();
      this.formSave.updateValueAndValidity();
      return;
    }

    const rawData = this.formSave.value; // Lấy dữ liệu từ form
    const body = {
      name: rawData.name || "Holiday Discount", // Nếu rỗng thì mặc định
      items: rawData.items.map((item: any) => ({
        itemId: item.itemId,
        displayPrice: item.displayPrice ? parseFloat(item.displayPrice) : 0,
        discountPercent: item.discountPercent ? parseFloat(item.discountPercent) : 0
      })),
      deviceIds: rawData.deviceIds
    };
    console.log('body  create campaign: ', body);
    this.spinnerService.show();
    this.priceCampaignSerive.createPriceCampaign(body).subscribe(res => {
      this.spinnerService.hide();
      console.log('reponse create campaign', res);
      if (res && res.status && res.status.code == Constants.STATUS.SUCCESS) {
        this.toastr.success('Thêm mới campaign giá thành công!', 'Thông báo')
      } else {
        this.toastr.error('Thêm mới campaign giá thất bại!', 'Thông báo')
      }

    }, error => {
      this.spinnerService.hide()
    });

  }

  onUpdate() {
    console.log(this.formSave.value)

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
