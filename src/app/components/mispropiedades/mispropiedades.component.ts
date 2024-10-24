import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad/propiedad.service';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, HeaderComponent, RouterModule, FooterComponent],
  templateUrl: './mispropiedades.component.html',
  styleUrls: ['./mispropiedades.component.css']
})
export class MisPropiedadesComponent implements OnInit {
  propiedades: Propiedad[] = [];
  mensaje: string = '';

  constructor(
    private propiedadUsuarioService: PropiedadService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPropiedadesPorId();

    if (typeof localStorage !== 'undefined') {
      const usuarioActualString = localStorage.getItem('usuarioActual');
      console.log(usuarioActualString);
    } else {
      console.error('localStorage no está disponible.');
    }
  }

  getPropiedadesPorId(): void {
    const usuarioActualString = localStorage.getItem('usuarioActual');
    if (usuarioActualString) {
      const usuarioActual = JSON.parse(usuarioActualString);
      const userId = usuarioActual.id;

      this.propiedadUsuarioService.getPropiedadPorId(userId).subscribe({
        next: (propiedades) => {
          this.propiedades = propiedades;
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

  editarPropiedad(propiedadId: number): void {
    this.router.navigate(['/editar-propiedad', propiedadId]);
  }
}

