import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AlquilerService } from '../../services/alquiler/alquiler.service';
import { Alquiler } from '../../models/Alquiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-alquiler',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './detalles-alquiler.component.html',
  styleUrl: './detalles-alquiler.component.css'
})
export class DetallesAlquilerComponent {
  solicitud: Alquiler | null = null;
  mensaje: string = '';

  constructor(
    private route: ActivatedRoute,
    private alquilerService: AlquilerService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerDetallesAlquiler(Number(id));
    }
  }

  obtenerDetallesAlquiler(id: number): void {
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
