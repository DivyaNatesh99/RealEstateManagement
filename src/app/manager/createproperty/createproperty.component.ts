import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/property';

import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-createproperty',
  templateUrl: './createproperty.component.html',
  styleUrls: ['./createproperty.component.css']
})
export class CreatepropertyComponent implements OnInit {

  pro:Property = new Property();

  constructor(private managerservice:ManagerService, private router:Router)
  { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createProperty()
  {
    this.managerservice.createPro(this.pro).subscribe({
      next:(data)=>
      {
        console.log(data);
      },
      error:(e)=>
      {
        console.log(e);
      }
    });
  }

  onSubmit()
  {
    this.createProperty();
    alert('Property Added Sucessfully');
  }
}
