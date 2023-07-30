import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { env } from 'environments/env';
import { ApiResponse } from 'app/model/api-response';
import { Order } from 'app/model/order';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class OrderService {

  getOrdersUrl = env.getOrdersUrl;

  constructor(private http: HttpClient) { }

  public getOrders(userId:number): Observable<ApiResponse<Order>> {
    return this.http.get<ApiResponse<Order>>(this.getOrdersUrl+userId);
  }
}

