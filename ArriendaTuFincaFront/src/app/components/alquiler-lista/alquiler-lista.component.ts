import { Component, OnInit } from '@angular/core';
import { Alquiler } from '../../models/Alquiler';
import { AlquilerService } from '../../services/alquiler/alquiler.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-alquiler-lista',
  standalone: true,  
  imports: [CommonModule, HeaderComponent, FooterComponent],
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
}

