import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

usuarioURL = 'http://localhost:8080/usuario/'

  constructor() { }
}
