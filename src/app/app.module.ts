import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';
import { ListaPaisComponent } from './pais/lista-pais.component';
import { DetallePaisComponent } from './pais/detalle-pais.component';
import { NuevoEditPaisComponent } from './pais/nuevo-edit-pais.component';
import { ListaEstadoComponent } from './estado/lista-estado.component';
import { DetalleEstadoComponent } from './estado/detalle-estado.component';
import { NuevoEditEstadoComponent } from './estado/nuevo-edit-estado.component';
import { ListaContactoComponent } from './contacto/lista-contacto.component';
import { DetalleContactoComponent } from './contacto/detalle-contacto.component';
import { NuevoEditContactoComponent } from './contacto/nuevo-edit-contacto.component';

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
    EditarUsuarioComponent,
    ListaPaisComponent,
    DetallePaisComponent,
    NuevoEditPaisComponent,
    ListaEstadoComponent,
    DetalleEstadoComponent,
    NuevoEditEstadoComponent,
    ListaContactoComponent,
    DetalleContactoComponent,
    NuevoEditContactoComponent
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
