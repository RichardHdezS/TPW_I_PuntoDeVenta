import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EliminarComponent } from './pages/productos/eliminar/eliminar.component';
import { ModificarComponent } from './pages/productos/modificar/modificar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   EliminarComponent,
   ModificarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
