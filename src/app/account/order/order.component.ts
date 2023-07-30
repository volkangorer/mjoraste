import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {  OrderService } from './order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'app/model/api-response';
import { Order } from 'app/model/order';


export interface PeriodicElement {
  id: string;
  position: number;
  productAmount: number;
  totalPrice: number;
  createdDate?: string;
  action?: string;
}




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']

})



export class OrderComponent {

  userId!:number;

  key : String = "online";

  trueOrderList : Order[];
  falseOrderList : Order[];

  orderModel : OrderModel;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService : OrderService) {
      this.orderModel = new OrderModel;
      this.trueOrderList = new Array<Order>;
      this.falseOrderList = new Array<Order>;
  }

  displayedColumns:string[] = ['position','createdDate', 'id', 'productAmount', 'totalPrice', 'action'];

  dataSource!:PeriodicElement[];


  ngOnInıt(){

  }

  onlineOrders(){

    this.trueOrderList = [];

    this.userId =Number(localStorage.getItem('id'));

    this.orderService.getOrders(this.userId).subscribe((data: any) => {

      for(let val of data.data){
        //console.log(val);
        if(val['orderStatus'] != true){
          //
        }else{
          val['order_status'] = "PREPARING"
          this.trueOrderList.push(val);
        }
      }

      this.dataSource = this.trueOrderList.map((order, index) => {
        //const amount = order.orderItems.
        return {
          position: index,
          createdDate: order.orderDate,
          id: ''+ order.orderCode,
          productAmount: order.orderItems.length,
          totalPrice: order.totalPrice,
          action: order.order_status
        }
      })



    });

    this.key = "online";
  }

  canceledOrders(){

    this.falseOrderList  = [];

    this.userId =Number(localStorage.getItem('id'));

    this.orderService.getOrders(this.userId).subscribe((data: any) => {

      for(let val of data.data){
        //console.log(val);
        if(val['orderStatus'] != true){
          val['order_status'] = "CANCELED"
          this.falseOrderList.push(val);
        }else{
          //
        }
      }

      this.dataSource = this.falseOrderList.map((order, index) => {
        //const amount = order.orderItems.
        return {
          position: index,
          createdDate: order.orderDate,
          id: ''+ order.orderCode,
          productAmount: order.orderItems.length,
          totalPrice: order.totalPrice,
          action: order.order_status
        }
      })


    });



    this.key="canceled"

  }



  deleteItem(id: string): void {
    console.log(id);
  }

}

export class OrderModel{
      id!: number;
      orderCode!: string;
      orderDate!: string;
      totalPrice!: number;
      userId!: number;
}





