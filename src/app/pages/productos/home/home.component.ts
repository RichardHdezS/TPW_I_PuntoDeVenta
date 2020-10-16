import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/schemadb';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:Producto[];
  
  constructor(private database: DbService) { }

  ngOnInit(): void {
    this.productos = this.database.get_productos();
  }

}
