import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../../environments/env";
import {Observable} from "rxjs";
import {UserAddressResponse} from "../../model/userAddressResponse";
import {OrdersInfoRequest} from "../../model/ordersRequest";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  private baseUrl = env.apiUrl + '/api/orders'

  constructor(private http: HttpClient) { }

  sendUserAddressInfo(data: OrdersInfoRequest): Observable<UserAddressResponse>{
    console.log("here");
    let userId = localStorage.getItem('id');
    return this.http.post<UserAddressResponse>(this.baseUrl + `/purchase/${userId}`, data)
  }
}
