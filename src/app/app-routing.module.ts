import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'clientes', loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'productos', loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosModule) },
  { path: 'ventas', loadChildren: () => import('./pages/ventas/ventas.module').then(m => m.VentasModule) },
  { path: 'ticket', loadChildren: () => import('./pages/ticket/ticket.module').then(m => m.TicketModule) },
  { path: 'reporte', loadChildren: () => import('./pages/reporte/reporte.module').then(m => m.ReporteModule) },
  { path: '**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
