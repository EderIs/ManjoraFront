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
import {ListaTituloComponent}from './titulo/lista-titulo.component'
import { NuevoEditarTituloComponent } from './titulo/nuevo-editar-titulo.component';
import { DetalleTituloComponent } from './titulo/detalle-titulo.component';
import { NuevoEditarHorarioTrabComponent } from './horarioTrabajo/nuevo-editar-horario-trab.component';
import { ListaHorarioTrabComponent } from './horarioTrabajo/lista-horario-trab.component';
import { DetalleHorarioTrabComponent } from './horarioTrabajo/detalle-horario-trab.component';
import { DetalleBancoComponent } from './banco/detalle-banco.component';
import { NuevoEditarBancoComponent } from './banco/nuevo-editar-banco.component';
import { ListaBancoComponent } from './banco/lista-banco.component';
import { ListaHoraLabComponent } from './horaLaboral/lista-hora-lab.component';
import { DetalleHoraLabComponent } from './horaLaboral/detalle-hora-lab.component';
import { NuevoEditarHoraLabComponent } from './horaLaboral/nuevo-editar-hora-lab.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent,
    DetalleUsuarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    ListaTituloComponent,
    NuevoEditarTituloComponent,
    DetalleTituloComponent,
    NuevoEditarHorarioTrabComponent,
    ListaHorarioTrabComponent,
    DetalleHorarioTrabComponent,
    DetalleBancoComponent,
    NuevoEditarBancoComponent,
    ListaBancoComponent,
    ListaHoraLabComponent,
    DetalleHoraLabComponent,
    NuevoEditarHoraLabComponent
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
