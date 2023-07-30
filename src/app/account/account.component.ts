import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { OrderComponent } from './order/order.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  orderComponent:OrderComponent;

  constructor(private router: Router ) {
  }

  key : String = "orders";

  ngOnInit(){

    this.goToOrders();
  }

  goToOrders(){
    this.key = "orders";
  }

  goToUser(){
    this.key = "user";
  }


}
