import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../environments/env";
import {map, Observable} from "rxjs";
import {GetAllProductResponse} from "../model/getAllProductResponse";
import {ApiResponse} from "../model/api-response";

@Injectable({
  providedIn: 'root'
})
export class AdminPageService {
  baseUrl = env.apiUrl + '/api/products'

  constructor(private http: HttpClient) { }

  public getProduct(): Observable<GetAllProductResponse[]>{
    return this.http.get<ApiResponse<GetAllProductResponse[]>>(this.baseUrl)
      .pipe(map((response) => response.data))
  }

}
