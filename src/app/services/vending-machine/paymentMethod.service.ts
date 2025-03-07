import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ResponseModel} from "../../model/response.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  apiUrl = '';

  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public getAllPaymentMethod(): Observable<ResponseModel<any>> {
    return this.httpClient.get<ResponseModel<any>>(`${this.apiUrl}/payment-methods`);
  }

}
