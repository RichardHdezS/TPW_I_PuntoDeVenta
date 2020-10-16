import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/schemadb';
import { DbService } from '../../../services/db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cliente:Cliente;

  constructor(
    private router:Router,
    private database:DbService
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente("","","","",0);
  }

	onSubmit(form){
    this.database.create_cliente(this.cliente);
    this.router.navigate(['clientes']);
  }
  
}