import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  // Inyecta el Router en el constructor
  constructor(private router: Router) {}

  irHome() {
    this.router.navigate(['/home']); 
  }

  irBuscar() {
    this.router.navigate(['/buscar']); 
  }

  irMisPropiedades() {
    this.router.navigate(['/mispropiedades']);
  }

  irSolicitudesAlquiler() {
    this.router.navigate(['/alquileres']);
  }
}
