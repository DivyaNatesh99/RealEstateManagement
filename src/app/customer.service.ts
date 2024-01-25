import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private getUrl ="http://localhost:8081/customer/get";
  private getProUrl="http://localhost:8081/customer/getProperties";
  private createUrl="http://localhost:8081/customer/create";

  constructor(private http:HttpClient) { }

  get():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(`${this.getUrl}`);
  }

  getPro():Observable<Property[]>
  {
    return this.http.get<Property[]>(`${this.getProUrl}`);
  }

  createCustomer(customer:Customer):Observable<Object>
  {
    return this.http.post(`${this.createUrl}`,customer);
  }
}
