import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent {

  constructor(private router: Router) {
  }
  getCreditCardInfo(){
    localStorage.setItem('paymentId', '1')
    this.router.navigateByUrl("payment-detail")

  }
  payCash(){
    localStorage.setItem('paymentId', '2')
    this.router.navigateByUrl("payment-detail")

  }
}
