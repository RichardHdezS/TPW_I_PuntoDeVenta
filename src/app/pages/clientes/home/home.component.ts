import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/schemadb';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientes : Cliente[];
  
  constructor(
    private database: DbService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.clientes = this.database.get_clientes();
  }

  delete_cliente(client){
    const response = confirm('Are you sure you want to delete');
    if(response){
      this.database.delete_cliente(client);
      this.router.navigate(['clientes']);
      location.reload();
    }
  }

}
