import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, Venta, VentaDetalle } from 'src/app/models/schemadb';
import { DbVentaService } from 'src/app/pages/ventas/db-venta.service';

@Component({ 
  selector: 'app-vregister',
  templateUrl: './vregister.component.html',
  styleUrls: ['./vregister.component.css']
})

export class VregisterComponent implements OnInit {
  venta:Venta;
  cliente:Cliente[];
  detalle:VentaDetalle;


  constructor(
    private router:Router,
    private database:DbVentaService
  ) { }

  ngOnInit(): void {
    this.venta = new Venta ("","",0,0);
    this.detalle = new VentaDetalle (0,"",0,0);
    this.cliente = this.database.get_clientes();
  }

  onSubmit(form){
    this.database.create_venta(this.venta);
    this.database.create_detalle(this.detalle);
    this.router.navigate(['ventas']);
  }

}
