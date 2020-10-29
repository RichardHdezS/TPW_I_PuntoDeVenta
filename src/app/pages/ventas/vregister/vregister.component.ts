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
 
   dlleProducto:number;//sera el folio de la venta
   dlleDescripcion:string;//el nombre del o de los productos
   dlleCantidad:string;//cantidad del producto llevado
   dllePrecio:number;//precio unitaria del producto
   dlleImporte:number;//total de la cantidad del producto

  constructor(
    private router:Router,
    private database:DbVentaService
  ) { //incializamos las varibales para recoger datos del detalle venta
    this.dlleProducto=0;
    this.dlleDescripcion="";
    this.dlleCantidad="";
    this.dllePrecio=0;
    this.dlleImporte=0;
  }

  ngOnInit(): void {
    this.venta = new Venta ("","",0,0);
    
    this.cliente = this.database.get_clientes();
    this.producto = this.database.get_productos();
    console.log("Hola aqui estan los clientes -->" + this.cliente);
  }


  onSubmit(form){
    this.database.create_venta(this.venta);
    
    //al enviar el formulario obtenemos
    this.dllePrecio=parseInt( (<HTMLInputElement>document.getElementById("folio")).value );//obtenemos el folio
    this.dlleCantidad=(<HTMLInputElement>document.getElementById("cantidad")).value;//la cantidad vendida del producto
    this.dllePrecio=parseInt((<HTMLInputElement>document.getElementById("price")).value);//el precio unitario del producto
    this.dlleImporte=this.dllePrecio * (parseInt(this.dlleCantidad));
        this.detalle = new VentaDetalle (this.dlleProducto,this.dlleDescripcion,this.dlleCantidad,this.dllePrecio,this.dlleImporte);//creamos un objeto con los datos para el dlle de la venta
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
    //console.log("Esta es la descripcion" + this.producto[contador].descripcion);
    (<HTMLInputElement>document.getElementById("descripcion")).value = this.producto[contador].descripcion;
      this.dlleDescripcion=this.producto[contador].descripcion;
    const x:string = this.producto[contador].precio + "";
   // console.log(x);
    (<HTMLInputElement>document.getElementById("price")).value = x;
    //console.log((<HTMLInputElement>document.getElementById("price")).value);
}

}
