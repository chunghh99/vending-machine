import {Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-reissue-password',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reissue-password.component.html',
  styleUrl: './reissue-password.component.scss'
})
export class ReissuePasswordComponent implements OnInit {
  formSave: any;
  changeForm: boolean = true;

  constructor(private fb: FormBuilder,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.formSave = this.fb.group({
      userName: [''],
      phoneNumber: [''],
      fullName: [''],
      areaManager: ['']
    })
  }

  onChangeForm() {
      this.changeForm = true;
  }

  onSearchUser() {
    this.changeForm = false;
  }

  onReissuePassword() {
    if(this.changeForm){
      this.toast.error('Bạn cần tìm kiếm user trước khi Cấp lại mật khẩu!')
    }
  }

}
