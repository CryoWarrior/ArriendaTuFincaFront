import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../../models/Usuario';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  crearUsuario(usuario:Usuario): Promise< Usuario > {
    return axios.post< Usuario >('http://localhost:8082/usuarios', usuario).then(response => response.data);
  }
}
