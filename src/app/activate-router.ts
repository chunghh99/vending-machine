import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Constants} from "./constants";

@Injectable({
  providedIn: 'root'
})
export class ActivateRouter implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem(Constants.TOKEN);
    const menu = localStorage.getItem(Constants.MENU) || '';
    if (!menu) {
      //nếu không có menu nào thì chuyn về trang home
      this.router.navigate(['']);
    }
    if (token) {
      const currentUrl = route.url.join('/')

      // nếu là trang home thì by pass
      if (currentUrl === '') {
        return true;
      }

      // check xem user có quyền được vào menu không
      const menuParsed = JSON.parse(menu);
      return this.isUrlInParentAndChild(menuParsed, currentUrl);
    } else {
      // Nếu không có token, chuyển hướng người dùng đến trang đăng nhập
      this.router.navigate(['/login']);
      return false;
    }
  }

  isUrlInParentAndChild(items: any, urlToCheck: any): boolean {

    // Duyệt qua từng mục trong mảng items
    for (let item of items) {
      // Kiểm tra URL của mục cha nếu như không có url con
      if (item.url === urlToCheck && !item.children) {
        return true;
      }
      // Kiểm tra từng mục con của mục cha nếu có
      if (item.children) {
        for (let child of item.children) {
          console.log('ch', child.url)
          if (child.url === urlToCheck) {
            return true;
          }
        }
      }
    }
    return false; // Nếu không tìm thấy URL trong bất kỳ URL nào của các mục, trả về false
  }


}
