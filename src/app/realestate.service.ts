import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class RealestateService {

  private getUrl="http://localhost:8082/property/get"

  constructor( private Http:HttpClient) { }

  getProperty():Observable<Property[]>
  {
    return this.Http.get<Property[]>(`${this.getUrl}`);
  }
}
