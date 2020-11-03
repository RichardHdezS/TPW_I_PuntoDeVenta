import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VregisterComponent } from '../ventas/vregister/vregister.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'vregister', component: VregisterComponent }
  ];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class VentasRoutingModule { }
