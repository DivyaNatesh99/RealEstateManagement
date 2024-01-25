import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../property';
import { RealestateService } from '../realestate.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  pro:Property[]|undefined;

  constructor(private propertyservice:RealestateService, private router:Router)
  {
    
  }

  ngOnInit():void{
    this.get();
  }
  
  private get()
  {
    this.propertyservice.getProperty().subscribe(data=>
      {
        this.pro = data;
      });
  }

}
