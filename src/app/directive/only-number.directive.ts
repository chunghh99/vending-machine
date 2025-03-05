import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]',
  standalone: true
})
export class OnlyNumberDirective {

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target.value;

    // Lọc và chỉ giữ lại các ký tự số
    event.target.value = input.replace(/[^0-9]/g, '');
  }
}
