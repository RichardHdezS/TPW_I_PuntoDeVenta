import { Injectable } from '@angular/core';
import { Venta } from 'src/app/models/schemadb';
import { VentaDetalle } from 'src/app/models/schemadb';
import { Cliente } from 'src/app/models/schemadb';

@Injectable({
  providedIn: 'root'
})

export class DbVentaService {

  
  constructor() {

   }

  get_ventas():Venta[]{
      let retrievedObject = localStorage.getItem('database');
      console.log('get_ventas');
      console.log(retrievedObject);
      return JSON.parse(retrievedObject).ventas;
  }

  get_clientes():Cliente[]{
    let retrievedObject = localStorage.getItem('database');
    console.log('get_clientes');
    console.log(retrievedObject);
    return JSON.parse(retrievedObject).Cliente;
  }

  get_detalles():VentaDetalle[]{
    let retrievedObject = localStorage.getItem('database');
    console.log('get_detalles');
    console.log(retrievedObject);
    return JSON.parse(retrievedObject).DVentas;
  }

  create_detalle(VentaDetalle){
    var retrievedObject = localStorage.getItem('database');
    var db = JSON.parse(retrievedObject);
    db.ventas.push(VentaDetalle);
    localStorage.setItem('database', JSON.stringify(db));
  }

  create_venta(Venta){
    var retrievedObject = localStorage.getItem('database');
    var db =  JSON.parse(retrievedObject);
    db.ventas.push(Venta);
    localStorage.setItem('database', JSON.stringify(db));
  }
  

}