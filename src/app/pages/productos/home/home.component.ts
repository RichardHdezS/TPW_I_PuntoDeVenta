import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/schemadb';
import { Cliente } from 'src/app/models/schemadb';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:Producto[];
  produc:Producto;
  client:Cliente;
  
  
  constructor(
    private router:Router,
    private database: DbService) { }

  ngOnInit(): void {
    this.productos = this.database.get_productos();
  }

  delete_producto(produc){
    const response = confirm('Are you sure you want to delete');
    if(response){
      this.database.delete_producto(produc);
      this.router.navigate(['/productos']);
      location.reload();
    }
  }

}
