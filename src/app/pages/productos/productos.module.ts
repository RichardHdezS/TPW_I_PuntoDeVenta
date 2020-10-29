import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ProductosComponent, RegisterComponent, HomeComponent ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule
  ]
})
export class ProductosModule { }
