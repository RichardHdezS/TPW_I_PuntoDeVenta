import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta, VentaDetalle } from 'src/app/models/schemadb';
import { DbVentaService } from 'src/app/pages/ventas/db-venta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ventas : Venta[];
  vent : Venta;
  dllVentas:VentaDetalle[];
  mostrar=false;

  constructor(
    private router: Router,
    private database: DbVentaService
  ) { }

  ngOnInit(): void {
    this.ventas = this.database.get_ventas();
    this.dllVentas=this.database.get_detalles();
  }

  delete_venta(vent){
    const response = confirm('Are you sure you want to delete');
    if(response){
      this.database.delete_venta(vent);
      this.router.navigate(['/ventas']);
      location.reload();
    }
  }

}
