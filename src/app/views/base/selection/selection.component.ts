import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {NgSelectModule} from "@ng-select/ng-select";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [
    NgSelectModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectionComponent,
      multi: true
    }
  ],
})
export class SelectionComponent implements OnInit, ControlValueAccessor {

  @Input() multiple: boolean = false;
  @Input() bindLabel: any = 'value';
  @Input() bindValue: any = 'key';
  @Input() items: any[] = [];
  @Input() searchable: boolean = false;
  @Input() readonly: boolean = false;
  @Input() clearable: any;
  @Input() invalidSelection: boolean = false;


  people: any[] = [
    {value: 'chung hh1', key: 'male'},
    {value: 'chunghh2', key: 'male1'},
    {value: 'chunghh3', key: 'male2'},
    {value: 'chunghh4', key: 'male3'},
    {value: 'chunghh5', key: 'male4'},
    {value: 'chunghh6', key: 'male5'},
    {value: 'chunghh7', key: 'male6'},
    {value: 'chunghh8', key: 'male7'},
    {value: 'chunghh9', key: 'male8'},
    {value: 'chunghh10', key: 'male9'},
    {value: 'chunghh11', key: 'male10'},
    {value: 'chunghh12', key: 'male11'},
    {value: 'chunghh13', key: 'male12'},
    {value: 'chunghh14', key: 'male13'},
    {value: 'chunghh15', key: 'male14'},
  ];
  selectedItems: any = [];

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  ngOnInit() {
    if (!this.clearable) {
      this.clearable = this.multiple;
    }
    if (!this.items || this.items.length === 0) {
      this.items = this.people;
    }
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

  writeValue(keys: any): void {
    if (this.multiple) {
      if (keys && keys.length > 0) {
        this.selectedItems = keys;
      } else {
        this.selectedItems = [];
      }
    } else {
      this.selectedItems = 'selected ' + keys;
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


  onAddItem($event: any) {
    if (this.multiple) {
      this.onChange(this.selectedItems);
    }
  }

  onChangeItem($event: any) {
    if (!this.multiple) {
      this.onChange($event[this.bindValue]);
    }
  }

  onBlur() {
    this.onTouched();
    const elements = this.elementRef.nativeElement.getElementsByClassName('ng-select-container');
    setTimeout(() => {
      if (this.invalidSelection) {
        for (let i = 0; i < elements.length; i++) {
          // this.renderer.addClass(elements[i], 'invalid-selection');
          this.renderer.addClass(elements[i], 'is-invalid');
          // const htmlDiv = this.renderer.createElement('span');
          // htmlDiv.innerHTML = '<i class="fa fa-exclamation-circle" style="color: red"></i>';
          // this.renderer.appendChild(elements[i], htmlDiv);
        }
      } else {
        for (let i = 0; i < elements.length; i++) {
          this.renderer.removeClass(elements[i], 'is-invalid');
        }
      }
    }, 5)
  }
}
