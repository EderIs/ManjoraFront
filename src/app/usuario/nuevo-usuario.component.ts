import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  nombreUsuario: string = '';
  direccionCorreo : string = '';
  contrasena: string = '';
  fechaCreacion: Date = null;
  ultimoAcceso: Date = null;
  estado: boolean = false;

  constructor(
    private usuarioService : UsuarioService,
    private toastr: ToastrService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const usuario = new Usuario(this.nombreUsuario, this.direccionCorreo, this.contrasena, this.fechaCreacion, this.ultimoAcceso, this.estado);
    this.usuarioService.save(usuario).subscribe(  
      data => {
        this.toastr.success('Usuario Creado','OK', {
          timeOut: 3000
        });
        this.route.navigate(['/'])
      },
      err => {
        this.toastr.error(err.error.mensaje,'Fail', {
          timeOut: 3000
        });
        this.route.navigate(['/'])
      }
    );
  }  
}
