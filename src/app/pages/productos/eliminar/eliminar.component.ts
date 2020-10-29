import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/schemadb';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  producto:Producto;

  constructor(
    private router:Router,
    private database:DbService
  ) { }

  ngOnInit(): void {
    this.producto = new Producto("","","",0,0,0);
   // console.log("onInit register ");
  }
  /*onSubmit(form){
    this.database.delete_producto(this.producto);
    this.router.navigate(['/productos']);
  }*/
  
  delete_producto(producto){
    const response = confirm('Are you sure you want to delete');
    if(response){
      this.database.delete_producto(this.producto);
      this.router.navigate(['/productos']);
    }
  }

}