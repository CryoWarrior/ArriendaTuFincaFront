import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { PropiedadService } from '../services/propiedad/propiedad.service'; 
import { Propiedad } from '../models/Propiedad'; 
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule], 
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'], 
})
export class BuscarComponent implements OnInit {
  propiedades: Propiedad[] = [];
  propiedadesFiltradas: Propiedad[] = [];
  busqueda: string = '';

  constructor(private propiedadService: PropiedadService) {}

  ngOnInit(): void {
    this.cargarPropiedades(); 
  }

  cargarPropiedades(): void {
    this.propiedadService.obtenerPropiedades().then(data => {
      this.propiedades = data;
      this.propiedadesFiltradas = data; // Al iniciar, se muestran todas las propiedades
    }).catch(error => {
      console.error('Error al obtener propiedades:', error);
    });
  }

  filtrarPropiedades(): void {
    const normalize = (str: string): string =>
      str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    this.propiedadesFiltradas = this.propiedades.filter(propiedad =>
      normalize(propiedad.direccion).includes(normalize(this.busqueda))
    );
  }
}
