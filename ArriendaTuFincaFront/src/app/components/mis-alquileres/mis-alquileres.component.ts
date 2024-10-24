import { Component, OnInit } from '@angular/core';
import { Alquiler } from '../../models/Alquiler';
import { AlquilerService } from '../../services/alquiler/alquiler.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mis-alquileres',
  standalone: true,  
  imports: [CommonModule, HeaderComponent, FooterComponent, MatCardModule],
  templateUrl: './mis-alquileres.component.html',
  styleUrl: './mis-alquileres.component.css'
})

export class MisAlquileresComponent {
  alquileres: Alquiler[] = [];

  mensaje: string = '';

  constructor(private alquilerService: AlquilerService) {}

  ngOnInit(): void {
    this.obtenerAlquileresPorUsuario();
  }

  obtenerAlquileresPorUsuario(): void {
    const usuarioActualString = localStorage.getItem('usuarioActual'); 
    if (usuarioActualString) { 
      const usuarioActual = JSON.parse(usuarioActualString); 
      const userId = usuarioActual.id;

      this.alquilerService.getAlquileresPorUsuario(userId).subscribe({
        next: (alquileres) => {
          this.alquileres = alquileres;
        },
        error: (err) => {
          console.error('Error al obtener los alquileres', err);
          this.mensaje = `Error al cargar los alquileres: ${err.message || err.toString()}`;
        }
      });
    } else {       
      console.error('No se encontró el usuarioActual en localStorage');     
      this.mensaje = 'No se encontró el usuario actual.';     
    }

  }

  revisarAlquiler(alquiler: Alquiler): void {
    // Aquí podrías implementar lógica para cancelar un alquiler
    // Por ejemplo, llamando a un servicio que interactúe con el backend
    console.log('Poner pantalla alquiler:', alquiler);
  }
}
