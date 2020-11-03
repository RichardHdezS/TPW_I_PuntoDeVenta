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

   Vfolio:string;
   Vfecha:string;
   Vcliente:string;
   Vimport:number;

  constructor(
    private router:Router,
    private database:DbVentaService
  ) { //incializamos las varibales para recoger datos del detalle venta
    this.dlleProducto=0;
    this.dlleDescripcion="";
    this.dlleCantidad="";
    this.dllePrecio=0;
    this.dlleImporte=0;

    //incializamos las variables para venta
    this.Vfolio="";
    this.Vfecha="";
    this.Vcliente="";
    this.Vimport=0;

    //inciamos las variables para crear
  }

  ngOnInit(): void {    
    this.cliente = this.database.get_clientes();
    this.producto = this.database.get_productos();
  }


  onSubmit(form){
    this.Vfolio= (<HTMLInputElement>document.getElementById("folio")).value ;
    this.Vfecha = (<HTMLInputElement>document.getElementById("fecha")).value;
    this.Vcliente =  (<HTMLInputElement>document.getElementById("cliente")).value ;

    //al enviar el formulario obtenemos
    this.dlleProducto=parseInt( (<HTMLInputElement>document.getElementById("folio")).value );//obtenemos el folio
        console.log(`Detale Producto ${this.dlleProducto}`);
    this.dlleCantidad=(<HTMLInputElement>document.getElementById("cantidad")).value;//la cantidad vendida del producto
        console.log(`Detale Cantidad ${this.dlleCantidad}`);
    this.dllePrecio=parseInt((<HTMLInputElement>document.getElementById("price")).value);//el precio unitario del producto
        console.log(`Detale precio ${this.dllePrecio}`);
    this.dlleImporte=this.dllePrecio * (parseInt(this.dlleCantidad));
        console.log(`Detale importe ${this.dlleImporte}`);
        this.Vimport=this.dlleImporte;
    //creamos el detalle de la venta
    this.venta = new Venta (this.Vfolio,this.Vfecha,this.Vcliente,this.Vimport);
    this.database.create_venta(this.venta);
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
