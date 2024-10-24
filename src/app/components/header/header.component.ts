import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  irDetalleUsuario() {
    this.router.navigate(['/perfil']);
    }

  irHome() {
    this.router.navigate(['/home']); 
  }

  irBuscar() {
    this.router.navigate(['/buscar']); 
  }

  irSolicitudesAlquiler() {
    this.router.navigate(['/solicitudes']);
  }

  irMisPropiedades() {
    this.router.navigate(['/mispropiedades']);
  }
  

  irMisArriendos() {
    this.router.navigate(['/alquileres']);
  }

  logout(){
    this.usuarioService.logout(); 
  }
  
}
