import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ResponseModel} from "../../model/response.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SlotService {
  apiUrl = '';

  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public getAllSlot(): Observable<ResponseModel<any>> {
    return this.httpClient.get<ResponseModel<any>>(`${this.apiUrl}/slots`);
  }

  public createSlot(body: any, deviceId: any): Observable<ResponseModel<any>> {
    return this.httpClient.post<ResponseModel<any>>(`${this.apiUrl}/slots/${deviceId}`, body);
  }

  public updateSlot(body: any, id: any): Observable<ResponseModel<any>> {
    return this.httpClient.put<ResponseModel<any>>(`${this.apiUrl}/slots/${id}`, body);
  }

  public replaceAllByDeviceId(body: any, id: any): Observable<ResponseModel<any>> {
    return this.httpClient.post<ResponseModel<any>>(`${this.apiUrl}/slots/replace-all/${id}`, body);
  }

}
