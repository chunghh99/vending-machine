import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {catchError, map} from "rxjs/operators";
import {Router} from "@angular/router";
import {SpinnerService} from "../../services/spinner.service";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService,
              private router: Router,
              private spinnerService: SpinnerService
  ) {
  }

  arrAuth = [401, 403];

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercep api')
    // Kiểm tra kết nối internet
    if (!window.navigator.onLine) {
      this.toastr.error('Không kết nối được đến server. Vui lòng thử lại sau', 'Thông báo');
      // this.spinnerService.hide();
      return throwError(new HttpErrorResponse({error: 'Internet is required.'}));
    }

    // Kiểm tra xem request có phải là login không (check URL)
    if (req.url.includes('login')) {
      console.log('login url')
      // Nếu là login, không thêm token
      return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
          console.log('event response: ', event);
          // Kiểm tra nếu response là HttpResponse và trạng thái là 200 OK
          if (event instanceof HttpResponse) {
            const status = event.status;
            // Nếu status khác 200, bạn có thể xử lý ở đây
            if (this.arrAuth.includes(status)) {
              this.handleLogin();
            }
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          // Nếu có lỗi (ví dụ: server không phản hồi), bạn có thể xử lý ở đây
          console.log('catchError: ', error);
          if (this.arrAuth.includes(error.status)) {
            this.handleLogin();
          }
          this.spinnerService.hide();
          this.toastr.error(`Có lỗi xảy ra, xin vui lòng thử lại sau!`, 'Thông báo');
          // this.spinnerService.hide();
          return throwError(error); // Để lỗi tiếp tục chuỗi xử lý
        })
      );
    }


    // Lấy token từ localStorage
    const authToken = localStorage.getItem('token');

    // Nếu có token, thêm vào request header
    if (authToken) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });

      // Tiến hành xử lý request với header đã thêm token
      return next.handle(cloned).pipe(
        map((event: HttpEvent<any>) => {
          // Kiểm tra nếu response là HttpResponse và trạng thái là 200 OK
          if (event instanceof HttpResponse) {
            const status = event.status;
            // Nếu status khác 200, bạn có thể xử lý ở đây
            console.log('response: ', event);
            if (this.arrAuth.includes(status)) {
              this.handleLogin();
            }
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          // Nếu có lỗi (ví dụ: server không phản hồi), bạn có thể xử lý ở đây
          if (this.arrAuth.includes(error.status)) {
            this.handleLogin();
          } else {
            this.spinnerService.hide();
            this.toastr.error(`Có lỗi xảy ra, xin vui lòng thử lại sau!`, 'Thông báo');
          }
          // this.spinnerService.hide();
          return throwError(error); // Để lỗi tiếp tục chuỗi xử lý
        })
      );
    }

    // Nếu không có token, thực hiện back về login và clear phiên
    this.handleLogin();
    // this.spinnerService.hide();
    return throwError('Token không tồn tại');
  }

  handleLogin(): any {
    localStorage.clear();
    this.spinnerService.hide();
    this.router.navigate(['/login']);
  }
}
