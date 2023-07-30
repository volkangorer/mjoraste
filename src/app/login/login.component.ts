import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'app/login/login-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequestModel } from 'app/model/login-request-model';
import {ApiResponse} from "../model/api-response";
import {LoginResponse} from "../model/loginResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequestModel : LoginRequestModel;

  email: string = '';

  password: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginServiceService,
    ) {
    this.loginRequestModel = new LoginRequestModel;
  }

  ngOnInit(){
    if(localStorage.getItem('id') != null){
      this.router.navigateByUrl('');
    }
  }

  onSubmit() {

    if(this.email != null && this.email!="" && this.password != null && this.password != ""){
      this.loginRequestModel.email = this.email;
      this.loginRequestModel.password = this.password;

      this.loginService.login(this.loginRequestModel).subscribe((data: ApiResponse<LoginResponse>) => {
        if(data.data === null){
          alert("your email or password is wrong")
          this.router.navigateByUrl("/login")
        } else {

          let id:any = data.data.id;

          localStorage.setItem("id",id);
          localStorage.setItem("email",data.data.email);
          localStorage.setItem("name",data.data.name);
          localStorage.setItem("surname",data.data.surName);
          localStorage.setItem("phoneNumber",data.data.phoneNumber);



          this.router.navigateByUrl("/");

        }
      });
    }else{
      alert("Required fields must be filled out");
    }
  }
  goToRegister(){
    this.router.navigate(['/register']);
  }

}
