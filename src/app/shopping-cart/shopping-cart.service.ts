import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/model/api-response';
import { Card } from 'app/model/card';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { env } from 'environments/env';
import { ApiResponss } from 'app/model/api-responss';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ShoppingCartService {

  private getCartsUrl = env.apiUrl +'/api/carts';

  private deleteCartsUrl = env.apiUrl +'/api/carts/removeCartItem';

  constructor(private http: HttpClient) {
  }

  public getCart(userId:number): Observable<ApiResponse<Card>> {
    return this.http.get<ApiResponse<Card>>(this.getCartsUrl+ `/${userId}`);
  }

  public deleteCart(cartItemId:number): Observable<ApiResponss> {

    return this.http.delete<ApiResponss>(this.deleteCartsUrl+ `/${cartItemId}`);
  }
}
