import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductDetailPageComponent} from "./product-detail-page/product-detail-page.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import {PaymentDetailComponent} from "./shopping-cart/payment-detail/payment-detail.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "detail", component: ProductDetailPageComponent
  },
  {
    path: "shoppingCart", component: ShoppingCartComponent
  },
  {
    path:"products/categoryId/:id", component: ProductsComponent
  },
  {
    path:"login",component:LoginComponent
  },

  {
    path:"register", component:RegisterComponent
  },
  {
    path:"account", component:AccountComponent
  },
  {
    path:"products/search/:searchInput", component:ProductsComponent
  },
  {
    path:"products/detail/productId/:id", component:ProductDetailPageComponent
  },
  {
    path: "payment-detail", component:PaymentDetailComponent
  },
  {
    path: "admin", component: AdminPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
