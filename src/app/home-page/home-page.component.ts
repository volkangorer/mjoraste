import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Categories, HomePageService, Products} from "./home-page.service";
import {Observable} from "rxjs";
import {CarouselImage} from "../product-detail-page/carousel/carousel.component";
import { NavbarComponent } from 'app/navbar/navbar.component';
import { Card } from 'app/model/card';
import { ShoppingCartService } from 'app/shopping-cart/shopping-cart.service';
import {ApiResponse} from "../model/api-response";


export const CATEGORIES = [
    {
      asset: './assets/mjoraste-img-4.jpg',
      name: 'Siyah Elbise'
    }
  ]

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  public categoriesList?: any;

  public productList?: any;

  public productList2: [] = [];

  public categoriesImageUrl: any  = []

    constructor(private router: Router, private homePageService: HomePageService,private shoppingCardService : ShoppingCartService,) {
  }

  catOneImageUrl : string = "";

  ngOnInit(){

    let id:number = Number(localStorage.getItem('id'));

    let size:number=0;

    this.shoppingCardService.getCart(id).subscribe((data: ApiResponse<Card>) => {

      console.log(data.data.cartItems.length);
      size = data.data.cartItems.length;
      NavbarComponent.cartItemSize = size;
    });

    //console.log(size);
    //NavbarComponent.cartItemIdSize = 1;



    this.homePageService.getAllCategories().subscribe((data:Categories) => {
      this.categoriesList = data.data;

    })



    this.homePageService.getTopProducts().subscribe((data:Products) => {

      this.productList = data.data.slice(0,6);



    })


  }

  fromCategoriesSectiontoProduct(id:number){
    this.router.navigateByUrl(`products/categoryId/${id}`)
  }

  fromCategoriesSectiontoProductDetail(id:number){
    this.router.navigateByUrl(`products/detail/productId/${id}`)
  }

}

export interface categoriesDetail{
  id:number,
  name:string
}



