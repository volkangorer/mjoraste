import { Component } from '@angular/core';
import {AdminPageService} from "./admin-page.service";
import {GetAllProductResponse} from "../model/getAllProductResponse";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  constructor(private adminPageService: AdminPageService) {
  }

  getAllProductfromAllProductPage(){
    console.log("rabia");
  }
  getAllOrders(){

  }
  getAllUsers(){

  }
  goToProductPage(){

  }
}
