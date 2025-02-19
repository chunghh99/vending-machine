import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ResponseModel} from "../../model/response.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  apiUrl = '';

  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public getAllItem(): Observable<ResponseModel<any>> {
    return this.httpClient.get<ResponseModel<any>>(`${this.apiUrl}/item`);
  }

  public getItemById(id:any): Observable<ResponseModel<any>> {
    return this.httpClient.get<ResponseModel<any>>(`${this.apiUrl}/item/${id}`);
  }

  public updateItem(body: any, id: any): Observable<ResponseModel<any>> {
    return this.httpClient.put<ResponseModel<any>>(`${this.apiUrl}/item/${id}`, body);
  }

  public createItem(body: any): Observable<ResponseModel<any>> {
    return this.httpClient.post<ResponseModel<any>>(`${this.apiUrl}/item`, body);
  }

  public deleteItem(id:any): Observable<ResponseModel<any>> {
    return this.httpClient.delete<ResponseModel<any>>(`${this.apiUrl}/item/${id}`);
  }




}
