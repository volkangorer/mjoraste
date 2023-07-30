import { Component } from '@angular/core';
import {AdminPageService} from "../admin-page.service";
import {GetAllProductResponse} from "../../model/getAllProductResponse";

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {

  allProduct?: GetAllProductResponse[];
  constructor(private adminPageService: AdminPageService) {
  }
  getAllProduct(){
    this.adminPageService.getProduct().subscribe((data) => {
      console.log(data);
      this.allProduct = data;
    })
  }
}
