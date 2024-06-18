import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {NgIf} from "@angular/common";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {MultiSelectComponent} from "../../../base/multi-select/multi-select.component";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgMultiSelectDropDownModule,
    FormsModule,
    MultiSelectComponent
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent implements OnInit {
  userForm: any;


  constructor(private fb: FormBuilder,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      vendingMachine: ['', [Validators.required]],
      dropdown: [[2,3], [Validators.required]]
    });
  }


  onCreateUser() {
    console.log(this.userForm.value)
  }

  validField(field: string): boolean {
    const control = this.userForm.get(field)
    return control.invalid && (control.dirty || control.touched)
  }

  showError(controlName: any, errorName: any) {
    const control = this.userForm.get(controlName);
    return control.hasError(errorName) && control.touched;
  }


}
