import { Component } from '@angular/core';
import { signUp } from '../Models';
import { ManagerService } from '../Services/manager.service';

@Component({
  selector: 'app-manager-auth',
  templateUrl: './manager-auth.component.html',
  styleUrls: ['./manager-auth.component.css']
})
export class ManagerAuthComponent {
  showLogin = false;
  authError: String = '';
  constructor(private seller: ManagerService) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data: signUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }
  login(data: signUp): void {
    this.seller.userLogin(data);
    // this.seller.isLoginError.subscribe((isError) => {
    //   if (isError) {
    //     this.authError = "Email or password is not correct";
    //   }
    // })
  }
  openLogin() {
    this.showLogin = true
  }
  openSignUp() {
    this.showLogin = false
  }
}
