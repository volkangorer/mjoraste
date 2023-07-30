import {Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterService) { }
  onRegister(data: UserInfo) {
    if(data.email!="" && data.password!=""   && data.phoneNumber!=""  && data.name!=""  && data.surName!="" ){

      if(data.password === data.passwordAgain){
          data.email = data.email.trim();
          data.password = data.password.trim();
          data.phoneNumber = data.phoneNumber.trim();
          data.name = data.name.trim();
          data.surName = data.surName.trim();
          this.registerService.sendUserInfo(data).subscribe((data) => {
              console.log(data);
              this.router.navigateByUrl("/login")
          })
      }else{
        alert("Passwords do not match");
      }
      }else{
        alert("Required fields must be filled out");
      }
  }
}
export interface UserInfo {
  email: string,
  name: string,
  surName: string,
  password: string,
  passwordAgain: string,
  phoneNumber: string,
}
