import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlquilerService } from '../../services/alquiler/alquiler.service';
import { Alquiler } from '../../models/Alquiler';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-detalles-solicitud',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './detalles-solicitud.component.html',
  styleUrl: './detalles-solicitud.component.css'
})
export class DetallesSolicitudComponent implements OnInit {
  solicitud: Alquiler | null = null;
  mensaje: string = '';

  constructor(private route: ActivatedRoute, private alquilerService: AlquilerService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerDetallesSolicitud(Number(id));
    }
  }

  obtenerDetallesSolicitud(id: number): void {
    this.alquilerService.getAlquilerPorId(id).subscribe({
      next: (solicitud) => {
        this.solicitud = solicitud;
      },
      error: (err) => {
        console.error('Error al obtener los detalles del alquiler', err);
        this.mensaje = `Error al cargar los detalles: ${err.message || err.toString()}`;
      }
    });
  }
}
