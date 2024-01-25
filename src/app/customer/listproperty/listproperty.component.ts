import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { Property } from 'src/app/property';



@Component({
  selector: 'app-listproperty',
  templateUrl: './listproperty.component.html',
  styleUrls: ['./listproperty.component.css']
})
export class ListpropertyComponent {

  cus: Customer[] |undefined;
  pro:Property[] |undefined;

  constructor(private customerservice:CustomerService, private router:Router)
  {
    this.getcustomer();
  }

  private getcustomer()
  {
      this.customerservice.getPro().subscribe(data =>{
        this.pro = data;
      });
  }

  OnSubmit()
  {
    
  }

}
