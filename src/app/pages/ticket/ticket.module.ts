import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket.component';



@NgModule({
  declarations: [TicketComponent, HomeComponent],
  imports: [
    CommonModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
