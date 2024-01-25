import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Executive } from '../executive';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-listexecutive',
  templateUrl: './listexecutive.component.html',
  styleUrls: ['./listexecutive.component.css']
})
export class ListexecutiveComponent implements OnInit {

  exe:Executive[] |undefined;

  constructor(private managerservice:ManagerService, private router:Router)
  { }

  ngOnInit(): void {
    this.get();
  }

  private get()
  {
    this.managerservice.getExecutive().subscribe(data=>
      {
        this.exe=data;
      });
  }

}
