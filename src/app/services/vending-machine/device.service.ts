import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ResponseModel} from "../../model/response.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  apiUrl = '';

  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public getAllDevice(): Observable<ResponseModel<any>> {
    return this.httpClient.get<ResponseModel<any>>(`${this.apiUrl}/devices/all`);
  }

  public getDeviceById(id: any): Observable<ResponseModel<any>> {
    return this.httpClient.get<ResponseModel<any>>(`${this.apiUrl}/devices/${id}`);
  }

  public updateDevice(body: any, id: any): Observable<ResponseModel<any>> {
    return this.httpClient.put<ResponseModel<any>>(`${this.apiUrl}/devices/${id}`, body);
  }

  public createDevice(body: any): Observable<ResponseModel<any>> {
    return this.httpClient.post<ResponseModel<any>>(`${this.apiUrl}/devices`, body);
  }

  public deleteDevice(id:any): Observable<ResponseModel<any>> {
    return this.httpClient.delete<ResponseModel<any>>(`${this.apiUrl}/item/${id}`);
  }




}
