import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DB } from './models/schemadb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'punto-de-venta';
  opcion = 'home';
  db:DB = new DB([],[],[],[],[]);

  constructor( private router:Router){
    if (! localStorage.getItem('database')){ 
      localStorage.setItem('database', JSON.stringify(this.db));
    }
  }

  menuClientes(){

  }

  listarClientes(event) {

  }  

  menuProductos(){
    
  }

  menuVentas(){
    
  }

  menuReporte(){
    
  }
}
