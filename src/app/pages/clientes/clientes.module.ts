import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ClientesComponent, RegisterComponent, HomeComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ]

})
export class ClientesModule { }
