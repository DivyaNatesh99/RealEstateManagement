import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from 'src/app/customer/model/customer';



import { Executive } from '../executive';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.css']
})
export class ListcustomerComponent implements OnInit{
  exe:Executive[]| undefined;
  cus:Customer[] |undefined;

  constructor(private customerService:CustomerService, private router:Router)
  {}
  ngOnInit(): void {
    this.get();
  }


 
  private get()
  {
    this.customerService.get().subscribe((data) =>
      {
        console.log(data)
        this.cus = data;
      });
  }
}
