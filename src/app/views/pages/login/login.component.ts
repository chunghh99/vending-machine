import {Component, OnInit} from '@angular/core';
import {NgIf, NgStyle} from '@angular/common';
import {IconDirective} from '@coreui/icons-angular';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from '@coreui/angular';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {SpinnerComponent} from "../../base/spinner/spinner.component";
import {SpinnerService} from "../../../services/spinner.service";
import {AuthService} from "../../../services/vending-machine/auth.service";
import {Constants} from "../../../core/constants/constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, ButtonDirective, NgStyle, ReactiveFormsModule, NgIf, SpinnerComponent]
})
export class LoginComponent implements OnInit {
  loginForm: any;
  menu: any = [
    {
      name: 'Báo cáo giao dịch',
      url: '/report-transaction',
      icon: 'fa fa-area-chart',
      children: [
        {
          name: 'Tra cứu doanh thu',
          url: 'report-transaction/revenue',
          icon: 'nav-icon-bullet'
        }
      ]
    },
    {
      name: 'Vận hành',
      url: '/operate',
      icon: 'fa fa-desktop',
      children: [
        {
          name: 'Vận hành thiết bị',
          url: 'operate/device',
          icon: 'nav-icon-bullet'
        },
        {
          name: 'Cập nhật hàng hóa',
          url: 'operate/product',
          icon: 'nav-icon-bullet'
        }
      ]
    },
    {
      name: 'Chăm sóc khách hàng',
      url: '/customer-care',
      icon: 'fa fa-area-chart',
      children: [
        {
          name: 'Tra cứu lịch sử mua hàng',
          url: 'customer-care/purchase-history',
          icon: 'nav-icon-bullet'
        }
      ]
    },

    {
      name: 'Admin',
      url: '/admin',
      icon: 'fa fa-user',
      children: [
        {
          name: 'Khai báo user',
          url: 'admin/create-user',
          icon: 'nav-icon-bullet'
        },
        {
          name: 'Khai báo quảng cáo',
          url: 'admin/advertisement-management',
          icon: 'nav-icon-bullet'
        },
        {
          name: 'Cấp lại mật khẩu',
          url: 'admin/reset-password',
          icon: 'nav-icon-bullet'
        },
        {
          name: 'Khóa tài khoản',
          url: 'admin/lock-account',
          icon: 'nav-icon-bullet'
        },
        {
          name: 'Mở khóa tài khoản',
          url: 'admin/unLock-account',
          icon: 'nav-icon-bullet'
        },
      ]
    },]


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private spinnerService: SpinnerService,
              private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    localStorage.clear();
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  validField(field: string): boolean {
    if (this.loginForm.controls[field].invalid && (this.loginForm.controls[field].dirty || this.loginForm.controls[field].touched)) {
      return true;
    }
    return false;
  }

  login() {
    // call api login va thuc hien luu phien dang nhap
    this.markFormGroupTouched(this.loginForm);
    if (this.loginForm.invalid) {
      console.log(this.loginForm);
      return;
    }

    this.spinnerService.show();
    this.authService.login(this.loginForm.value).subscribe(res => {
      this.spinnerService.hide();
      if (res && res.status && res.status.code === Constants.STATUS.SUCCESS) {
        // xu ly menu theo role
        localStorage.setItem(Constants.MENU, JSON.stringify(this.menu));
        localStorage.setItem(Constants.TOKEN, res?.data?.accessToken);
        this.router.navigate(['/']);
        // this.router.navigate(['report-transaction/revenue']);
        this.showSuccess();
      }
    }, error => {
      this.spinnerService.hide();
    });
  }

  showSuccess() {
    this.toastr.success('Đăng nhập thành công');
  }


}
