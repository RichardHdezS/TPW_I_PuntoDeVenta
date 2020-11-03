import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, Venta, VentaDetalle, Producto } from 'src/app/models/schemadb';
import { DbVentaService } from 'src/app/pages/ventas/db-venta.service';


@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  venta:Venta;

  constructor(
    private router:Router,
    private database:DbVentaService
  ) { }

  ngOnInit(): void {
    this.venta = new Venta("","","",0);
   // console.log("onInit register ");
  }
  /*onSubmit(form){
    this.database.delete_producto(this.producto);
    this.router.navigate(['/productos']);
  }*/
  
  delete_producto(producto){
    const response = confirm('Are you sure you want to delete');
    if(response){
      this.database.delete_venta(this.venta);
      this.router.navigate(['/productos']);
    }
  }

}
