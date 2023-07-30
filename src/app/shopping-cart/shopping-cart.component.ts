import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'app/model/card';
import { ApiResponse } from 'app/model/api-response';
import { SpecifyCartItemModel } from 'app/model/SpecifyCartItemModel';
import { ShoppingCartItem } from 'app/model/shoppingCartItem';
import { ApiResponss } from 'app/model/api-responss';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NavbarComponent } from 'app/navbar/navbar.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  public totalPrice?:number=0;

  specifyCartModel : SpecifyCartItemModel;

  cartItemsList : Array<ShoppingCartItem> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingCardService : ShoppingCartService,
    private dialogRef: MatDialog) {
      this.specifyCartModel = new SpecifyCartItemModel;
  }

  private userId:number=0;

  ngOnInit(){
    this.userId =Number(localStorage.getItem('id'));
    console.log(this.userId);

    this.shoppingCardService.getCart(this.userId).subscribe((data: ApiResponse<Card>) => {

      console.log(data);

      this.totalPrice = data.data.totalPrice;

      this.cartItemsList = data.data.cartItems;

      let id:number = Number(localStorage.getItem('id'));

      let size:number=0;

      this.shoppingCardService.getCart(id).subscribe((data: ApiResponse<Card>) => {

        console.log(data.data.cartItems.length);
        size = data.data.cartItems.length;
        NavbarComponent.cartItemSize = size;
      });

    });
  }
  openPaymentDialog(){
    this.dialogRef.open(PaymentDialogComponent)
  }

  deleteFromStorage(cartItemId : number){
    this.shoppingCardService.deleteCart(cartItemId).subscribe((data: ApiResponss) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  goToShoppingCart(){

  }
}
