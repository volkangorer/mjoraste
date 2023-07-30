import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PaymentDetailService} from "./payment-detail.service";
import {OrdersInfoRequest} from "../../model/ordersRequest";
import { NavbarComponent } from 'app/navbar/navbar.component';
import { ApiResponse } from 'app/model/api-response';
import { Card } from 'app/model/card';
import { ShoppingCartService } from 'app/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent {
  constructor(private _formBuilder: FormBuilder, private router: Router, private paymentDetailService: PaymentDetailService,private shoppingCardService : ShoppingCartService) {}

  isEditable = false;
  paymentId = localStorage.getItem('paymentId')

  firstFormGroup = this._formBuilder.group({
    cardNumber: ['', Validators.required],
    cardOwner: ['', Validators.required],
    mm: ['', Validators.required],
    vv: ['', Validators.required],
    cvv: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    fullAddress: ['', Validators.required],
    town:  ['', Validators.required],
    city:  ['', Validators.required],
  });

  sendCardInfo(data: any){
    console.log(data)
  }
  sendAddressInfo() {
    const data = this.secondFormGroup.value
    const payload: OrdersInfoRequest = {
      city: data.city,
      fullAddress: data.fullAddress,
      paymentTypeId: 1,
      town: data.town
    }
    this.paymentDetailService.sendUserAddressInfo(payload).subscribe((response) => {


      let id:number = Number(localStorage.getItem('id'));

      let size:number=0;

      this.shoppingCardService.getCart(id).subscribe((data: ApiResponse<Card>) => {

        console.log(data.data.cartItems.length);
        size = data.data.cartItems.length;
        NavbarComponent.cartItemSize = size;
      });

      alert("your order has been created")
      this.router.navigateByUrl('account');
    })
  }


}
