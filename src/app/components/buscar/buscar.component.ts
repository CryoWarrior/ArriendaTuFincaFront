import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropiedadService } from '../../services/propiedad/propiedad.service';
import { Propiedad } from '../../models/Propiedad';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, HeaderComponent, FooterComponent],
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  propiedades: Propiedad[] = [];
  propiedadesFiltradas: Propiedad[] = [];
  busqueda: string = '';

  constructor(private propiedadService: PropiedadService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPropiedades();
  }

  cargarPropiedades(): void {
    const usuarioActualString = localStorage.getItem('usuarioActual');
    if (usuarioActualString) {
      const usuarioActual = JSON.parse(usuarioActualString);
      const userId = usuarioActual.id;

      this.propiedadService.getPropiedadPorAlquilerNoAprobado(userId).subscribe({
        next: (data: Propiedad[]) => {
          this.propiedades = data;
          this.propiedadesFiltradas = data;
        },
        error: (err) => {
          console.error('Error al obtener las propiedades', err);
        }
      });
    } else {
      console.error('No se encontró el usuarioActual en localStorage');
    }
  }

  filtrarPropiedades(): void {
    const normalize = (str: string): string =>
      str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    this.propiedadesFiltradas = this.propiedades.filter(propiedad => {
      const propietarioNombre = propiedad.propietario?.nombre || ''; // Usa un valor por defecto si es undefined
      const area = propiedad.area !== null && propiedad.area !== undefined ? propiedad.area.toString() : '0'; // Valor por defecto para area
      const valorNoche = propiedad.valorNoche !== null && propiedad.valorNoche !== undefined ? propiedad.valorNoche.toString() : '0'; // Valor por defecto para valorNoche

      return (
        normalize(propiedad.ciudad || '') // Asegúrate de que ciudad no sea undefined
          .includes(normalize(this.busqueda)) ||
        normalize(propiedad.descripcion || '') // Asegúrate de que descripción no sea undefined
          .includes(normalize(this.busqueda)) ||
        normalize(propietarioNombre) // propietarioNombre ya tiene un valor por defecto
          .includes(normalize(this.busqueda)) ||
        area.includes(normalize(this.busqueda)) || // Convierte a string para la comparación
        valorNoche.includes(normalize(this.busqueda)) // Convierte a string para la comparación
      );
    });
  }

  aplicar(propiedad: Propiedad): void {
    console.log('Propiedad a enviar:', propiedad);
    this.router.navigateByUrl('/solicitar-arriendo', {
      state: { propiedad: propiedad }
    });
  }
}

