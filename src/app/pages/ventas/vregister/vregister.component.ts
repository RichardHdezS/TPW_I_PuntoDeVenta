import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, Venta, VentaDetalle, Producto } from 'src/app/models/schemadb';
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
  producto:Producto[];


  constructor(
    private router:Router,
    private database:DbVentaService
  ) { }

  ngOnInit(): void {
    this.venta = new Venta ("","",0,0);
    this.detalle = new VentaDetalle (0,"","",0,0);
    this.cliente = this.database.get_clientes();
    this.producto = this.database.get_productos();
    console.log("Hola aqui estan los clientes -->" + this.cliente);


  }


  onSubmit(form){
    this.database.create_venta(this.venta);
    this.database.create_detalle(this.detalle);
    this.router.navigate(['ventas']);
  }

  onChange() {
    let Buscar = (<HTMLInputElement>document.getElementById("Producto")).value;
    let contador;
    for(let i: number = 0; i < this.producto.length; i++)
    {
      if(Buscar === (this.producto[i].clave)){
        contador = i;
        console.log(contador);
      }
    }
    (<HTMLInputElement>document.getElementById("descripcion")).value = this.producto[contador].descripcion;
    const x:string = this.producto[contador].precio + "";
    console.log(x);
    (<HTMLInputElement>document.getElementById("price")).value = x;
}

}
