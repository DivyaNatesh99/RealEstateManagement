import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl="http:localhost:8089/user/login";
  signupUrl="http:localhost:8089/user/signup";

  constructor(private http:HttpClient) { }

  signUp(userObj:any)
  {
    return this.http.post<any>(`${this.signUp}`,userObj);
  }
  login(loginObj:any)
  {
    return this.http.post<any>(`${this.loginUrl}`,loginObj);
  }

  SignOut()
  {
    localStorage.clear();
  }
}
