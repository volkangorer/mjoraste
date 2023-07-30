import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  public component;

  constructor(private router: Router) {
    this.component = NavbarComponent;
  }

  searchInput:string="";

  key:string="";

  public static cartItemSize:number;



  ngOnInit(){
    if(localStorage.getItem('id')==null){
      this.key = "login";
      NavbarComponent.cartItemSize = 0;
    }else{
      this.key = "account";

    }
  }


  fromHomeToShoppingCard(){
    this.router.navigateByUrl("shoppingCart")
  }

  fromHomeToAccount(){
    this.router.navigateByUrl("account")
  }

  search(){
    this.router.navigate([`products/search/${this.searchInput}`]);
  }

  fromHomeToLogin(){
    this.router.navigateByUrl("login")
  }
}
