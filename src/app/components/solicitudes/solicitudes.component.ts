import { Component } from '@angular/core';
import { Alquiler } from '../../models/Alquiler';
import { AlquilerService } from '../../services/alquiler/alquiler.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MatCardModule,],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})

export class SolicitudesComponent {
  solicitudes: Alquiler[] = [];
  mensaje: string = '';

  constructor(private router: Router, private alquilerService: AlquilerService) {}

  ngOnInit(): void {
    this.obtenerSolicitudesPorPropietario();
  }

  obtenerSolicitudesPorPropietario(): void {
    const propietarioString = localStorage.getItem('usuarioActual'); 
    if (propietarioString) { 
      const propietarioActual = JSON.parse(propietarioString); 
      const propietarioId = propietarioActual.id;

      this.alquilerService.getSolicitudesPorPropietario(propietarioId).subscribe({
        next: (solicitudes) => {
          this.solicitudes = solicitudes;
        },
        error: (err) => {
          console.error('Error al obtener las solicitudes', err);
          this.mensaje = `Error al cargar las solicitudes: ${err.message || err.toString()}`;
        }
      });
    } else {       
      console.error('No se encontró el propietarioActual en localStorage');     
      this.mensaje = `Error al cargar las solicitudes: ${propietarioString}`;     
    }
  }

  detallesSolicitud(alquiler: Alquiler): void {
    this.router.navigate([`/solicitudes/${alquiler.id}`]);
  }
}
