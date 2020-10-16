import { Injectable } from '@angular/core';
import { Cliente, Producto } from '../models/schemadb';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  
  constructor() {

   }

  get_clientes():Cliente[]{
    let retrievedObject = localStorage.getItem('database');
    console.log('get_clientes');
    console.log(retrievedObject);
    return JSON.parse(retrievedObject).clientes;
  }

  get_productos():Producto[]{
    let retrievedObject = localStorage.getItem('database');
    console.log('get_prodctos');
    console.log(retrievedObject);
    return JSON.parse(retrievedObject).productos;
  }

  create_cliente(cliente){
    var retrievedObject = localStorage.getItem('database');
    var db =  JSON.parse(retrievedObject);
    db.clientes.push(cliente);
    localStorage.setItem('database', JSON.stringify(db));

  }  

  create_producto(producto){
    var retrievedObject = localStorage.getItem('database');
    var db =  JSON.parse(retrievedObject);
    db.productos.push(producto);
    localStorage.setItem('database', JSON.stringify(db));
  }  


}
