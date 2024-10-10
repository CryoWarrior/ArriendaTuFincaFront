import { Injectable } from '@angular/core';
import axios from 'axios';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

  constructor() { }

  crearUsuario(usuario:Usuario): Promise< Usuario > {
    return axios.post< Usuario >('http://localhost:8082/usuarios', usuario).then(response => response.data);
  }

  checkCorreo(correo: string): Promise< string > {
    return axios.get< string >('http://localhost:8082/usuarios/checkMail/'+correo).then(response => response.data);
  }
  checkContrasenia(correo: string ,contrasenia: string): Promise< string > {
    return axios.get< string >('http://localhost:8082/usuarios/checkPassword/'+contrasenia+'/'+correo).then(response => response.data);
  }
}
