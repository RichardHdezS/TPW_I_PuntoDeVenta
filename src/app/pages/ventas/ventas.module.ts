import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { HomeComponent } from './home/home.component';
import { VentasComponent } from './ventas.component';
import { FormsModule } from '@angular/forms';
import { VregisterComponent } from './vregister/vregister.component';
import { DVentasComponent } from './dventas/dventas.component';
import { EliminarComponent } from './eliminar/eliminar.component';



@NgModule({
  declarations: [VentasComponent, HomeComponent, VregisterComponent ,DVentasComponent, EliminarComponent],
  imports: [
    CommonModule,
    VentasRoutingModule,
    FormsModule
  ]

})
export class VentasModule { }
