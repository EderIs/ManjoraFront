import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent,
    DetalleUsuarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
