import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import { PropertyComponent } from './property/property.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerAuthComponent } from './manager-auth/manager-auth.component';
import { CustomerAuthComponent } from './customer-auth/customer-auth.component';
 import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { ListpropertyComponent } from './customer/listproperty/listproperty.component';
import { CreatepropertyComponent } from './manager/createproperty/createproperty.component';
import { CreateexceutiveComponent } from './manager/createexceutive/createexceutive.component';
import { ListcustomerComponent } from './manager/listcustomer/listcustomer.component';
import { ListexecutiveComponent } from './manager/listexecutive/listexecutive.component';
import { ListpropertiesComponent } from './manager/listproperties/listproperties.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertyComponent,
    HomeComponent,
    ManagerAuthComponent,
    CustomerAuthComponent,
    CustomerComponent,
    ManagerComponent,
    CreatecustomerComponent,
    ListpropertyComponent,
    CreatepropertyComponent,
    CreateexceutiveComponent,
    ListcustomerComponent,
    ListexecutiveComponent,
    ListpropertiesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
