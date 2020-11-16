import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta, VentaDetalle } from 'src/app/models/schemadb';
import { DbVentaService } from 'src/app/pages/ventas/db-venta.service';
import { Cell, Columns, PdfMakeWrapper, Table, Txt, Ul } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; 

PdfMakeWrapper.setFonts(pdfFonts);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ventas : Venta[];
  vent : Venta;
  fol:Venta;
  dllVentas:VentaDetalle[];
  mostrar=false;

  constructor(
    private router: Router,
    private database: DbVentaService
  ) { }

  ngOnInit(): void {
    this.ventas = this.database.get_ventas();
    this.dllVentas=this.database.get_detalles();
  }

  delete_venta(vent){
    const response = confirm('Are you sure you want to delete');
    if(response){
      this.database.delete_venta(vent);
      this.router.navigate(['/ventas']);
      location.reload();
    }
  }


  generarPdf(fol){

    let contador=0;
        var retrievedObject = localStorage.getItem('database');
        var db = JSON.parse(retrievedObject);
        for(let ve of db.ventas){
          if(ve.folio==fol.folio){
            var x = this.ventas[contador].folio
     var y = this.ventas[contador].cliente
     var z = this.ventas[contador].fecha
     var t = this.dllVentas[contador].descripcion
     var u = this.dllVentas[contador].cantidad
     var p = this.dllVentas[contador].precio
     var i = this.dllVentas[contador].importe
          } contador++;
    
        }
     
   
        // let contador=this.ventas.length-1;
    
    // let contadorDetalle=this.dllVentas.length-1;
    
    
     
    //  var t = this.dllVentas[contadorDetalle].descripcion
    //  var u = this.dllVentas[contadorDetalle].cantidad
    //  var p = this.dllVentas[contadorDetalle].precio
    //  var i = this.dllVentas[contadorDetalle].importe
    const pdf = new PdfMakeWrapper();
    pdf.add(new Txt('TIENDA').alignment('center').italics().bold().end);
    
    pdf.add( pdf.ln(1));
 
    pdf.add(new Txt('Esteban Vaca Calderón No. 37').alignment('center').italics().end);
  
    pdf.add(new Txt('C.P.: 60600 Apatzingán, Mich').alignment('center').italics().end);   

    pdf.add( new Txt('01-800-7656-345').alignment('center').end);   
  
    pdf.add(pdf.ln(2));
    
    pdf.add(  
      new Ul([
        'Folio:'+x,
        'Cliente:'+y,
        'Fecha:'+z   
    ]).type('none').end);
   
    pdf.add( pdf.ln(2));

  pdf.add("========================================");
  pdf.add (new Columns(['Artículo', 'Cantidad', 'SubTotal', 'Total']).columnGap(30).end );
  pdf.add("========================================");

  pdf.add (new Columns([t, u, '$'+p, '$'+i]).columnGap(40).end );

  pdf.add("-------------------------------------------------------------------------------");
  
  pdf.pageSize({
      width: 350,
      height: 'auto'
  });

  pdf.add(new Txt('TOTAL:                                                                $' + i).alignment('left').bold().end);

   pdf.add(pdf.ln(2));
  
   pdf.add(new Txt('¡GRACIAS POR SU COMPRA!').alignment('center').bold().end);
  // pdf.create().open();
    pdf.create().print();
}
}
