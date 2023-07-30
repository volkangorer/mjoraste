import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router: Router) {
  }

  name:string="";
  surName:string="";
  email:string="";
  phoneNumber:string="";

  ngOnInit(){
    this.name = localStorage.getItem('name');
    console.log(localStorage.getItem('name'));
    console.log(this.name);
    this.surName = localStorage.getItem('surname');
    this.email = localStorage.getItem('email');
    this.phoneNumber = localStorage.getItem('phoneNumber');
  }

  logOut(){

    localStorage.clear();
    this.router.navigateByUrl("/");
  }
}
