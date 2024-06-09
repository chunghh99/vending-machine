import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectRouter implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    console.log("abc router", token)
    if (token) {
      return true;
    } else {
      // Nếu không có token, chuyển hướng người dùng đến trang đăng nhập
      this.router.navigate(['/login']);
      return false;
    }
  }
}
