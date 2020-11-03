import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cliente, Producto, Venta } from '../models/schemadb';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  producto:Producto;

  
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

  delete_producto(producto:Producto){
    var retrievedObject = localStorage.getItem('database');
    var db = JSON.parse(retrievedObject);
    for(let prod of db.productos){
      if(prod.clave == producto.clave){
        const index = db.productos.indexOf(prod,0);
        if(index > -1){
          db.productos.splice(index,1);
        }
      }

    }
    localStorage.setItem('database', JSON.stringify(db));
  }

  delete_cliente(cliente:Cliente){
    var retrievedObject = localStorage.getItem('database');
    var db = JSON.parse(retrievedObject);
    for(let cli of db.clientes){
      if(cli.clave == cliente.clave){
        const index = db.clientes.indexOf(cli,0);
        if(index > -1){
          db.clientes.splice(index,1);
        }
      }

    }
    localStorage.setItem('database', JSON.stringify(db));
  }

  show_form(producto){
    var retrievedObject = localStorage.getItem('database');
    var db = JSON.parse(retrievedObject);

   // let clave = document.getElementById('clave');
   // let desc = document.getElementById('desc');
   // let clasif = document.getElementById('clasif');
   // let stock = document.getElementById('stock');
   // let costo = document.getElementById('costo');
   // let precio = document.getElementById('precio');

    


    //localStorage.setItem('database', JSON.stringify(db));
  }

}
