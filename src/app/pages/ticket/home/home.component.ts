import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/schemadb';
import { DbService } from 'src/app/services/db.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientes : Cliente[];
  constructor(
    private database: DbService
  ) { }

  ngOnInit(): void {

    this.clientes = this.database.get_clientes();
  }

}
