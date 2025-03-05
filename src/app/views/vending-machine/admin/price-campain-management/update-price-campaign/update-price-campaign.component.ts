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
  selector: 'update-save-price-campaign',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SelectionComponent,
    NgIf,
    NgForOf,
    OnlyNumberDirective
  ],
  templateUrl: './update-price-campaign.component.html',
  styleUrl: './update-price-campaign.component.scss'
})
export class UpdatePriceCampaignComponent implements OnInit {
  formSave: any;
  action: any = 'CREATE';
  previewImages: any;

  inmageUpdate = '';
  itemList: any[] = [];
  locationList: any[] = [];
  deviceList: any[] = [];
  campaignList: any[] = [];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer,
              private itemService: ItemsService,
              private deviceService: DeviceService,
              private spinnerService: SpinnerService,
              private toastr: ToastrService,
              private priceCampaignService: PriceCampaingService
  ) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const param = params['id'];
      console.log(params, param)
    });


    this.formSave = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      locationText: [''],
      deviceIds: [''],
      status: [''],
      itemId: [''],
      deviceNames: [''],
      items: this.fb.array([])
    })

    this.getAlldevice();
    this.getAllItems();
    this.getAllPriceCampaigns();
    this.locationList = Constants.LOCATION;
  }

  getAllPriceCampaigns() {
    this.priceCampaignService.getAllPriceCampaign().subscribe((res: any) => {
      console.log('res all device: ', res)
      if (res && res.status && res.status.code == Constants.STATUS.SUCCESS) {
        res.data.forEach((item: any) => {
          item.value = item.name;
          item.key = item.id;
        })
        this.campaignList = res.data;
      }
    })
  }


  getAllItems() {
    this.itemService.getAllItem().subscribe(res => {
      console.log('item res: ', res)
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

  onChangeCampaign(campaignId: any) {
    console.log('choose campaignId', campaignId);
    const campaign = this.campaignList.find(data => data.id === campaignId);
    this.formSave.patchValue(campaign);
    console.log('choose campaign', campaign, this.formSave.value);

    const devices = this.deviceList
      .filter(device => device.priceCampaign && device.priceCampaign.id === campaignId);
    console.log('device: ', devices);

    if (devices && devices.length > 0) {
      const deviceNames = devices.map(device => device.name);
      console.log('deviceNames: ', deviceNames);
      this.formSave.patchValue({
        'deviceNames': ((deviceNames.length > 2) ? `${deviceNames.slice(0, 2).join(", ")} ...` : deviceNames.join(", ")),
        'deviceIds': devices.map(device => device.id)
      });

    }
    // Cập nhật items vào FormArray
    const itemsFormArray = this.formSave.get('items') as FormArray;
    itemsFormArray.clear(); // Xóa dữ liệu cũ trước khi thêm mới

    campaign.items.forEach((item: any) => {
      const foundItem = this.itemList.find((i: any) => i.id === item.itemId);
      itemsFormArray.push(this.fb.group({
        itemId: [item.itemId],
        displayPrice: [item.displayPrice, Validators.required],
        discountPrice: [item.discountPrice],
        discountPercent: [item.discountPercent, [Validators.required, Validators.min(0), Validators.max(100)]],
        itemName: [foundItem ? foundItem.name : ''],  // Thêm itemName
        image: [foundItem ? foundItem.image : ''],    // Thêm image
      }));
    });

    console.log('choose campaign', campaign, this.formSave.value);
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
      deviceIds: rawData.deviceIds,
      status: 'ACTIVE'
    };
    console.log('body  updates campaign: ', body);
    this.spinnerService.show();
    this.priceCampaignService.updatePriceCampaign(body, rawData.id).subscribe(res => {
      this.spinnerService.hide();
      console.log('reponse create campaign', res);
      if (res && res.status && res.status.code == Constants.STATUS.SUCCESS) {
        this.toastr.success('Cập nhật campaign giá thành công!', 'Thông báo')
      } else {
        this.toastr.error('Cập nhật campaign giá thất bại!', 'Thông báo')
      }

    }, error => {
      this.spinnerService.hide()
    });

  }

  onCopy() {
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
