import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleDepartamentoComponent } from './departamento/detalle-departamento/detalle-departamento.component';
import { ListaDepartamentoComponent } from './departamento/lista-departamento/lista-departamento.component';
import { NuevoEditarDepartamentoComponent } from './departamento/nuevo-editar-departamento/nuevo-editar-departamento.component';
import { DetalleEmpleadoComponent } from './empleado/detalle-empleado/detalle-empleado.component';
import { ListaEmpleadoComponent } from './empleado/lista-empleado/lista-empleado.component';
import { NuevoEditarEmpleadoComponent } from './empleado/nuevo-editar-empleado/nuevo-editar-empleado.component';
import { DetallePuestoComponent } from './puesto/detalle-puesto/detalle-puesto.component';
import { ListaPuestoComponent } from './puesto/lista-puesto/lista-puesto.component';
import { NuevoEditarPuestoComponent } from './puesto/nuevo-editar-puesto/nuevo-editar-puesto.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';

const routes: Routes = [
  {path: 'listar', component: ListaUsuarioComponent},
  {path: 'detalle/:id', component: DetalleUsuarioComponent},
  {path: 'nuevo', component: NuevoUsuarioComponent},
  {path: 'editar/:id', component: EditarUsuarioComponent},
  {path: 'listar-departamento', component: ListaDepartamentoComponent},
  {path: 'detalle-departamento/:id', component: DetalleDepartamentoComponent},
  {path: 'nuevo-editar-departamento', component: NuevoEditarDepartamentoComponent},
  {path: 'listar-empleado', component: ListaEmpleadoComponent},
  {path: 'detalle-empleado/:id', component: DetalleEmpleadoComponent},
  {path: 'nuevo-editar-empleado', component: NuevoEditarEmpleadoComponent},
  {path: 'listar-puesto', component: ListaPuestoComponent},
  {path: 'detalle-puesto/:id', component: DetallePuestoComponent},
  {path: 'nuevo-editar-puesto', component: NuevoEditarPuestoComponent},
  {path: '**', redirectTo:'listar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
