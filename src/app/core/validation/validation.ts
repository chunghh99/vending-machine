import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function dateRangeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const fromDate = control.get('fromDate')?.value;
    const toDate = control.get('toDate')?.value;

    // Nếu một trong hai trường không có giá trị thì không kiểm tra lỗi
    if (!fromDate || !toDate) {
      return null; // Không có lỗi nếu chưa nhập đủ cả hai trường
    }

    // Nếu từ ngày lớn hơn đến ngày, báo lỗi
    return new Date(fromDate) > new Date(toDate) ? {dateRangeInvalid: true} : null;
  };
}
