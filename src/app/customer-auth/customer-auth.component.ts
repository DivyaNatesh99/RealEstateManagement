import { Component } from '@angular/core';
import { login, signUp } from '../Models';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-customer-auth',
  templateUrl: './customer-auth.component.html',
  styleUrls: ['./customer-auth.component.css']
})
export class CustomerAuthComponent {
  showLogin: boolean = true
  authError: string = "";
  constructor(private user: CustomerService) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: signUp) {
    this.user.userSignUp(data);
  }
  login(data: login) {
    this.user.userLogin(data)
    this.user.invalidUserAuth.subscribe((result) => {
      console.warn(result);
      if (result) {
        this.authError = "User not found"
      }

    })
  }
  openSignUp() {
    this.showLogin = false
  }
  openLogin() {
    this.showLogin = true;
  }

  
}
