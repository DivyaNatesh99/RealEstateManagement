import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/property';
import { ManagerService } from '../manager.service';


@Component({
  selector: 'app-listproperties',
  templateUrl: './listproperties.component.html',
  styleUrls: ['./listproperties.component.css']
})
export class ListpropertiesComponent implements OnInit{

  pro:Property[]|undefined;
  constructor(private managerservice:ManagerService, private router:Router)
  { }
  ngOnInit(): void {
    this.getpro();
  }

  private getpro()
  {
    this.managerservice.getpropety().subscribe(data=>
      {
        this.pro = data;
      });
  }

}
