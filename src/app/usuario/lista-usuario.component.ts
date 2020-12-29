import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

cargarUsuarios():void {
  this.usuarioService.lista().subscribe(
    data => {
      this.usuarios = data;
    },
    err => {
      console.log(err);
    }
  )
}

}
