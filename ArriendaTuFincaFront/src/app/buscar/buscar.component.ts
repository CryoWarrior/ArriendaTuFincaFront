import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { PropiedadService } from '../services/propiedad/propiedad.service'; 
import { Propiedad } from '../models/Propiedad'; 
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, HeaderComponent], 
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'], 
})
export class BuscarComponent implements OnInit {
  propiedades: Propiedad[] = [];
  propiedadesFiltradas: Propiedad[] = [];
  busqueda: string = '';
  userId = 3;

  constructor(private propiedadService: PropiedadService) {}

  ngOnInit(): void {
    this.cargarPropiedades(); 
  }

  cargarPropiedades(): void {     
    const usuarioActualString = localStorage.getItem('usuarioActual'); 
    if (usuarioActualString) { 
      const usuarioActual = JSON.parse(usuarioActualString); 
      const userId = usuarioActual.id;

      this.propiedadService.getPropiedadPorId(userId).subscribe({       
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

    this.propiedadesFiltradas = this.propiedades.filter(propiedad =>
      normalize(propiedad.ciudad).includes(normalize(this.busqueda))
    );
  }
}
