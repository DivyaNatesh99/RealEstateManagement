import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Executive } from '../executive';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-createexceutive',
  templateUrl: './createexceutive.component.html',
  styleUrls: ['./createexceutive.component.css']
})
export class CreateexceutiveComponent implements OnInit{

  exe:Executive= new Executive();

  constructor(private managerservice:ManagerService, private router:Router)
  { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  createExe()
  {
    this.managerservice.createExecutive(this.exe).subscribe({
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
  onsubmit()
  {
    console.log(this.exe);
    this.createExe();
    alert("Executive added sucessfully");
  }

}
