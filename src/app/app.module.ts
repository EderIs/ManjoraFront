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
import { DetalleEmpleadoComponent } from './empleado/detalle-empleado/detalle-empleado.component';
import { ListaEmpleadoComponent } from './empleado/lista-empleado/lista-empleado.component';
import { NuevoEditarEmpleadoComponent } from './empleado/nuevo-editar-empleado/nuevo-editar-empleado.component';
import { DetallePuestoComponent } from './puesto/detalle-puesto/detalle-puesto.component';
import { ListaPuestoComponent } from './puesto/lista-puesto/lista-puesto.component';
import { NuevoEditarPuestoComponent } from './puesto/nuevo-editar-puesto/nuevo-editar-puesto.component';
import { NuevoEditarDepartamentoComponent } from './departamento/nuevo-editar-departamento/nuevo-editar-departamento.component';
import { DetalleDepartamentoComponent } from './departamento/detalle-departamento/detalle-departamento.component';
import { ListaDepartamentoComponent } from './departamento/lista-departamento/lista-departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent,
    DetalleUsuarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    DetalleEmpleadoComponent,
    ListaEmpleadoComponent,
    NuevoEditarEmpleadoComponent,
    DetallePuestoComponent,
    ListaPuestoComponent,
    NuevoEditarPuestoComponent,
    NuevoEditarDepartamentoComponent,
    DetalleDepartamentoComponent,
    ListaDepartamentoComponent
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
