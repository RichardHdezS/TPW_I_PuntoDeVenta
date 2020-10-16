import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { HomeComponent } from './home/home.component';
import { VentasComponent } from './ventas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VentasComponent, HomeComponent],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
