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
 
   dlleProducto:string;//sera el folio de la venta
   dlleFolio:string;//el nombre del o de los productos
   dlleCantidad:number;//cantidad del producto llevado
   dllePrecio:number;//precio unitaria del producto
   dlleImporte:number;//total de la cantidad del producto

   Vfolio:string;
   Vfecha:string;
   Vcliente:string;
   Vimport:number;

   productoSeleccionado:string[];
   productoCanditdad:number[];
   productoPrecioUni:number[];
  preciosSeleccionados:number[];
  //productoDescripcion:string[];
   total:number;

   contador:number;
   contadorProductos:number;
  constructor(
    private router:Router,
    private database:DbVentaService
  ) { //incializamos las varibales para recoger datos del detalle venta
    this.dlleProducto="";
    this.dlleFolio="";
    this.dlleCantidad=0;
    this.dllePrecio=0;
    this.dlleImporte=0;

    //incializamos las variables para venta
    let f=new Date;
    this.Vfolio="";
    this.Vfecha=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    this.Vcliente="";
    this.Vimport=0;

    //iniciamizamos los arreglos para el detalle
    this.productoSeleccionado=new Array();
    this.productoCanditdad=new Array();
    this.productoPrecioUni=new Array();
    this.preciosSeleccionados=new Array();
    //this.productoDescripcion=new Array();

    this.contadorProductos=0;
    this.total=0
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
    let i=0;
    alert(this.contadorProductos)
    while (i<this.contadorProductos) {
    this.dlleFolio=this.Vfolio;
    this.dlleProducto= this.productoSeleccionado[i];//obtenemos el folio
    this.dlleCantidad=this.productoCanditdad[i];//la cantidad vendida del producto
    this.dllePrecio=this.productoPrecioUni[i];//el precio unitario del producto
    this.dlleImporte=this.preciosSeleccionados[i];
    this.detalle = new VentaDetalle (this.dlleFolio,this.dlleProducto,this.dlleCantidad,this.dllePrecio,this.dlleImporte);//creamos un objeto con los datos para el dlle de la venta
    this.database.create_detalle(this.detalle);
    i++;
    }

    this.Vimport=this.total;
    //creamos el detalle de la venta
    this.venta = new Venta (this.Vfolio,this.Vfecha,this.Vcliente,this.Vimport);
    this.database.create_venta(this.venta);
   
    this.router.navigate(['ventas']);
  }

  onChange() {
    let Buscar = (<HTMLInputElement>document.getElementById("Producto")).value;
    for(let i: number = 0; i < this.producto.length; i++)
    {
      if(Buscar === (this.producto[i].clave)){
       this.contador = i;
      }
    }
    
    //console.log("Esta es la descripcion" + this.producto[contador].descripcion);
    (<HTMLInputElement>document.getElementById("descripcion")).value = this.producto[this.contador].descripcion;
    const x:string = this.producto[this.contador].precio + "";
    (<HTMLInputElement>document.getElementById("price")).value = x;//actualizamos el importe de la venta
}

agregarPro(){
  let Buscar = document.getElementById("Producto")[this.contador+1].text;
    this.productoSeleccionado.push(Buscar);//el producto seleccioando, lo metemes al array

    let cant=parseInt((<HTMLInputElement>document.getElementById("cantidad")).value);//la cantidad vendida del producto
    this.productoCanditdad.push(cant)
    let pre=parseInt((<HTMLInputElement>document.getElementById("price")).value);//el precio unitario del producto
    this.productoPrecioUni.push(pre);
 
  let totalPro=cant*pre;
  this.preciosSeleccionados.push(totalPro);//agragamos total
  this.total=this.total + totalPro;
  this.contadorProductos++;
  this.limpiar()  
}

limpiar(){
  (<HTMLInputElement>document.getElementById("cantidad")).value="";
  (<HTMLInputElement>document.getElementById("price")).value="";
  (<HTMLInputElement>document.getElementById("descripcion")).value="";
  (<HTMLInputElement>document.getElementById("Producto")).value="Selecciona el producto";
  this.contador=0;
  console.log(this.productoSeleccionado);
  console.log(this.productoCanditdad);
  console.log(this.productoPrecioUni);
  console.log(this.preciosSeleccionados);

}
}
