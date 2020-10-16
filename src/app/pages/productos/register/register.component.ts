import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/schemadb';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  producto:Producto;

  constructor(
    private router:Router,
    private database:DbService
  ) { }

  ngOnInit(): void {
    this.producto = new Producto("","",0,0,0,0);
    console.log("onInit register ");
  }

	onSubmit(form){
    this.database.create_producto(this.producto);
    this.router.navigate(['/productos']);
	}
}