import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/schemadb';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  producto:Producto;

  constructor(
    private router:Router,
    private database:DbService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form){
    this.database.show_form(this.producto.clave);
    this.database.show_form(this.producto);
    this.router.navigate(['/productos']);
}
}