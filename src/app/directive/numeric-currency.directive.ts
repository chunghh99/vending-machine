import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNumericCurrency]',
  standalone: true
})
export class NumericCurrencyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('ngModelChange', ['$event']) onInputChange(event:any) {
    const initialValue = this.el.nativeElement.value;

    // Xóa các ký tự không phải số và dấu phẩy
    let formattedValue = initialValue.replace(/[^\d,]/g, '');

    // Loại bỏ các dấu phẩy dư thừa
    formattedValue = this.removeExtraCommas(formattedValue);

    // Format lại giá trị
    this.el.nativeElement.value = this.formatCurrency(formattedValue);
  }

  // Hàm format số thành đơn vị tiền tệ với dấu phẩy
  formatCurrency(value: string): string {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // Hàm loại bỏ dấu phẩy dư thừa
  removeExtraCommas(value: string): string {
    return value.replace(/,/g, '');
  }

}
