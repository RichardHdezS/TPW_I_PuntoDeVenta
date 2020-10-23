import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/schemadb';
import { DbVentaService } from 'src/app/pages/ventas/db-venta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ventas : Venta[];

  constructor(
    private database: DbVentaService
  ) { }

  ngOnInit(): void {
    this.ventas = this.database.get_ventas();
  }

}
