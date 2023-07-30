import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserInfo} from "./register.component";
import {Observable} from "rxjs";
import {env} from "../../environments/env";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class RegisterService {

  userSaveUrl = env.userSaveUrl;
  constructor(private http: HttpClient) { }
  public sendUserInfo(user: UserInfo): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.userSaveUrl, user);
  }
}
export interface UserResponse {
  success: boolean,
  message: string,
  data: string
}
