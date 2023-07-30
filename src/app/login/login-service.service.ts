import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequestModel } from 'app/model/login-request-model';
import {ApiResponse} from "../model/api-response";
import {LoginResponse} from "../model/loginResponse";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class LoginServiceService {

  private loginUrl: string;


  constructor(private http: HttpClient) {
    this.loginUrl = 'http://localhost:1907/api/auth/login';

  }

  public login(loginRequestModel:LoginRequestModel): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(this.loginUrl, loginRequestModel);
  }

}
