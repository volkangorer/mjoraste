import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ProductDetailPageComponent} from "./product-detail-page/product-detail-page.component";
import { CarouselComponent } from './product-detail-page/carousel/carousel.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatRadioModule} from "@angular/material/radio";
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { OrderComponent } from './account/order/order.component';
import { UserComponent } from './account/user/user.component';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from "@angular/material/badge";
import {MatDialogModule} from "@angular/material/dialog";
import { PaymentDetailComponent } from './shopping-cart/payment-detail/payment-detail.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AllProductComponent } from './admin-page/all-product/all-product.component';
import { PaymentDialogComponent } from './shopping-cart/payment-dialog/payment-dialog.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    ProductDetailPageComponent,
    CarouselComponent,
    NavbarComponent,
    ShoppingCartComponent,
    LoginComponent,
    ProductsComponent,
    AccountComponent,
    OrderComponent,
    UserComponent,
    PaymentDialogComponent,
    PaymentDetailComponent,
    AdminPageComponent,
    AllProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatBadgeModule,
    MatDialogModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

