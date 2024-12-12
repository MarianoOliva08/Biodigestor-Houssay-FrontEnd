import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteDialogComponent } from './components/clientes/cliente-dialog/cliente-dialog.component';
import { ConfirmDialogComponent } from './components/clientes/confirm-dialog/confirm-dialog.component';
import { ForoComponent } from './foro/foro.component'; // Importa ForoComponent correctamente

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteDialogComponent,
    ConfirmDialogComponent,
    ForoComponent // Declara ForoComponent aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule // Agrega FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


