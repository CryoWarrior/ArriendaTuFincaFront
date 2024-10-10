import { Component, OnInit } from '@angular/core';
import { Alquiler } from '../models/Alquiler';
import { AlquilerService } from '../services/alquiler/alquiler.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-alquiler-lista',
  standalone: true,  
  imports: [CommonModule],
  templateUrl: './alquiler-lista.component.html',
  styleUrls: ['./alquiler-lista.component.css']
})

export class AlquilerListaComponent implements OnInit {
  alquileres: Alquiler[] = [];
  mensaje: string = '';

  constructor(private alquilerService: AlquilerService) {}

  ngOnInit(): void {
    this.obtenerAlquileresPorUsuario();
  }

  obtenerAlquileresPorUsuario(): void {
    const userId = 1; // Aquí iría el ID del usuario que inicia sesión (se puede obtener de un servicio de autenticación)
    this.alquilerService.getAlquileresPorUsuario(userId).subscribe({
      next: (alquileres) => {
        this.alquileres = alquileres;
      },
      error: (err) => {
        console.error('Error al obtener los alquileres', err);
        this.mensaje = 'Error al cargar los alquileres.';
      }
    });
  }
}
