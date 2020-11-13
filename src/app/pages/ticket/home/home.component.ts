import { Component, OnInit } from '@angular/core';
import { DbVentaService } from 'src/app/pages/ventas/db-venta.service';
import { Venta, VentaDetalle } from 'src/app/models/schemadb';
import { Cell, Columns, PdfMakeWrapper, Table, Txt, Ul } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; 

PdfMakeWrapper.setFonts(pdfFonts);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  venta:Venta[]; 
  detalle:VentaDetalle[];
  constructor(private database:  DbVentaService) { }
  
  ngOnInit(): void {
    this.venta= this.database.get_ventas(); 
    this.detalle= this.database.get_detalles();

    let contador=this.venta.length-1;
   let contadorDetalle=this.detalle.length-1;
    
    var x = this.venta[contador].folio
    var y = this.venta[contador].cliente
    var z = this.venta[contador].fecha
    
    var t = this.detalle[contadorDetalle].descripcion
    var u = this.detalle[contadorDetalle].cantidad
    var p = this.detalle[contadorDetalle].precio
    var i = this.detalle[contadorDetalle].importe

    
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
  pdf.create().open();
  }
}

