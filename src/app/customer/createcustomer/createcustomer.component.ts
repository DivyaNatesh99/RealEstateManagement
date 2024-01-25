import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent {

  cus:Customer = new Customer();

  constructor(private customerservice:CustomerService, private router:Router)
  {}

  ngOnInit():void{

  }

  createCustomer():void 
  {
    this.customerservice.createCustomer(this.cus).subscribe({
      next:(data)=>
      {
        console.log(data);
      
      },
      error:(e)=>
      {
        console.log(e);
      }
    })
  }
  onsubmit()
  {
    console.log(this.cus);
    this.createCustomer();
    alert("Customer Created SucessFully");
  }

}
