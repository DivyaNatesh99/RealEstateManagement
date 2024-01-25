import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer/model/customer';
import { Property } from '../property';
import { Executive } from './executive';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  
  private getcustUrl = "http://localhost:8083/manager/customerlist"
  private createUrl="http://localhost:8083/manager/create"
  private getproUrl="http://localhost:8083/manager/propertylist"
  private createProUrl="http://localhost:8082/property/create" 
  private getExeUrl ="http://localhost:8083/manager/getAllExecutives"

  constructor( private http:HttpClient) { }

  
  getcustomer():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(`${this.getcustUrl}`);
  }

  createExecutive(executive:Executive)
  {
    return this.http.post(`${this.createUrl}`,executive);
  }

  getpropety():Observable<Property[]>
  {
    return this.http.get<Property[]>(`${this.getproUrl}`);
  }

  createPro(property:Property)
  {
    return this.http.post(`${this.createProUrl}`,property);
  }
  
  getExecutive():Observable<Executive[]>
  {
    return this.http.get<Executive[]>(`${this.getExeUrl}`);
  }
}
