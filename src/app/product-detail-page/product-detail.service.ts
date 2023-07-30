import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../environments/env";
import { ProductDetailsResponse } from 'app/model/productDetailsResponse';
import {map, Observable} from "rxjs";
import {ApiResponse} from "../model/api-response";
import { CartItemModel } from 'app/model/cardItemModel';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  userId?:number;

  private baseUrl = env.apiUrl + '/api/products';
  private baseUrlCard =  env.apiUrl +'/api/carts';
  private activatedRouter: any;

  constructor(private http: HttpClient ) {
    this.userId = Number(localStorage.getItem('id'));
   }

  public getProductsByProductId(productId: number): Observable<ProductDetailsResponse>{
    return this.http.get<ApiResponse<ProductDetailsResponse>>(this.baseUrl + `/details/${productId}`)
      .pipe(map((response) => response.data))
  }


  public sendProductAndQuantity(cardItemModel:CartItemModel): Observable<ApiCardResponse> {

    return this.http.post<ApiCardResponse>(this.baseUrlCard+`/${this.userId}/add`, cardItemModel);
  }

}

export interface ApiCardResponse{
  message: string,
  success: boolean
}



