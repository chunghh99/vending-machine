import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MultiSelectComponent,
      multi: true
    }
  ],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent implements OnInit, ControlValueAccessor {

  @Input() singleSelection: boolean = true;
  @Input() enableCheckAll: boolean = false;
  @Input() closeDropDownOnSelection: boolean = false;
  @Input() data: any = [];
  @Input() formControlName: any = 'dropdownFormControl';
  @Input() parentForm: any;
  @Output() onSelectedData = new EventEmitter<any>();

  @ViewChild('multipleSelectDropdownCustom', { static: false }) dropdown: any;

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};

  constructor() {
  }

  ngOnInit(): void {
    this.dropdownList = this.data;
    this.dropdownList = [
      {key: 1, value: 'Việt nam'},
      {key: 2, value: 'Bangaluru'},
      {key: 3, value: 'Pune'},
      {key: 4, value: 'Navsari'},
      {key: 5, value: 'New Delhi'}
    ];
    this.selectedItems = [{key: 4, value: 'Navsari'},
      {key: 5, value: 'New Delhi'}];
    this.dropdownSettings = {
      singleSelection: this.singleSelection,
      idField: 'key',
      textField: 'value',
      selectAllText: 'Chọn Tất cả',
      unSelectAllText: 'Bỏ chọn Tất cả',
      placeholder: 'Chọn',
      searchPlaceholderText: 'Tìm kiếm',
      allowSearchFilter: true,
      noDataAvailablePlaceholderText: 'Không có dữ liệu',
      noFilteredDataAvailablePlaceholderText: 'Không có dữ liệu tìm kiếm',
      enableCheckAll: this.enableCheckAll,
      clearSearchFilter: true,
      closeDropDownOnSelection: this.singleSelection,
      searchIcon: true
    };
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.onDisable = isDisabled;
  }

  writeValue(keys: any[]): void {
    if (keys && keys.length > 0) {
      this.selectedItems = this.dropdownList.filter((item: any) => keys.includes(item.key));
    } else {
      this.selectedItems = [];
    }
  }

  onChange: any = () => {
    console.log('onChange')
  };
  onTouched: any = () => {
    console.log('onTouch')
  };
  onDisable: any = () => {
    console.log('onDisable')
  };

  onItemSelect(item: any) {
    const selectedKeys = this.selectedItems.map((item: any) => item.key); // Lấy danh sách các key đã chọn
    this.onChange(selectedKeys); // Gọi hàm onChange để thông báo giá trị đã thay đổi
  }

  onSelectAll(items: any) {
    const selectedKeys = this.selectedItems.map((item: any) => item.key);
    this.onChange(selectedKeys); // Gọi onChange khi có thay đổi
  }

  onItemDeSelect(item: any) {
  const selectedKeys = this.selectedItems.map((item: any) => item.key); // Lấy danh sách các key đã chọn
    this.onChange(selectedKeys); // Gọi hàm onChange để thông báo giá trị đã thay đổi
  }

  onDeSelectAll(items: any) {
    const selectedKeys = this.selectedItems.map((item: any) => item.key);
    this.onChange(selectedKeys); // Gọi onChange khi có thay đổi
  }


  toggleDropdown($event: MouseEvent) {
    if (this.dropdown && this.dropdown.toggleDropdown) {
      this.dropdown.toggleDropdown();
    }
  }

}
