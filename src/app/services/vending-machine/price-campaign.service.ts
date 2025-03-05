import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ResponseModel} from "../../model/response.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PriceCampaingService {
  apiUrl = '';

  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public getAllPriceCampaign(): Observable<ResponseModel<any>> {
    return this.httpClient.get<ResponseModel<any>>(`${this.apiUrl}/price-campaigns`);
  }

  public getPriceCampaignById(id: any): Observable<ResponseModel<any>> {
    return this.httpClient.get<ResponseModel<any>>(`${this.apiUrl}/devices/${id}`);
  }

  public updatePriceCampaign(body: any, id: any): Observable<ResponseModel<any>> {
    return this.httpClient.put<ResponseModel<any>>(`${this.apiUrl}/price-campaigns/${id}`, body);
  }

  public createPriceCampaign(body: any): Observable<ResponseModel<any>> {
    return this.httpClient.post<ResponseModel<any>>(`${this.apiUrl}/price-campaigns`, body);
  }

  public deletePriceCampaign(id:any): Observable<ResponseModel<any>> {
    return this.httpClient.delete<ResponseModel<any>>(`${this.apiUrl}/item/${id}`);
  }




}
