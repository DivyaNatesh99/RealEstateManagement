import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAuthComponent } from './customer-auth/customer-auth.component';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { CustomerComponent } from './customer/customer.component';
import { ListpropertyComponent } from './customer/listproperty/listproperty.component';
import { ManagerAuthComponent } from './manager-auth/manager-auth.component';
import { CreateexceutiveComponent } from './manager/createexceutive/createexceutive.component';
import { CreatepropertyComponent } from './manager/createproperty/createproperty.component';
import { ListcustomerComponent } from './manager/listcustomer/listcustomer.component';
import { ListexecutiveComponent } from './manager/listexecutive/listexecutive.component';
import { ListpropertiesComponent } from './manager/listproperties/listproperties.component';
import { ManagerComponent } from './manager/manager.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  { path: "navbar", component: NavbarComponent },
  { path: "property", component: PropertyComponent },
  { path: "seller-auth", component: ManagerAuthComponent },
  {path: 'user-auth', component:CustomerAuthComponent },
  {path:'customer', component:CustomerComponent},
  {path:'createcustomer', component:CreatecustomerComponent},
  {path:'listproperty',component:ListpropertyComponent},
  {path:'manager',component:ManagerComponent},
  {path:"createexecutive",component:CreateexceutiveComponent},
  {path:"createproperty",component:CreatepropertyComponent},
  {path:"listcustomer",component:ListcustomerComponent},
  {path:"listproperty",component:ListpropertyComponent},
  {path:"listexecutive",component:ListexecutiveComponent},
  {path:"listproperties",component:ListpropertiesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
