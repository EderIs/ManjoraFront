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

  nombreUsuario = '';
  direccionCorreo = '';
  contrasena = '';
  fechaCreacion: Date;
  ultimoAcceso: Date;
  estado: boolean;

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const usuario = new Usuario(this.nombreUsuario,this.direccionCorreo,this.contrasena,
      this.fechaCreacion,this.ultimoAcceso,this.estado);
      this.usuarioService.save(usuario).subscribe(
        data => {
            this.toastr.success('Usuario Creado','Ok',{
              timeOut: 3000
            });
           // this.router.navigate(['listar'])
        },
        err => {
          this.toastr.error(err.error.mensaje,'fail',{
            timeOut: 3000
          });
         // this.router.navigate(['listar'])
        }
      )

  }

}
