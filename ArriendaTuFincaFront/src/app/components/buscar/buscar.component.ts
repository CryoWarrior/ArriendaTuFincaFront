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

  constructor(private propiedadService: PropiedadService, private router: Router ) {}

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
      return (
        normalize(propiedad.ciudad).includes(normalize(this.busqueda)) ||
        normalize(propiedad.descripcion).includes(normalize(this.busqueda)) ||
        normalize(propietarioNombre).includes(normalize(this.busqueda)) ||
        propiedad.area.toString().includes(normalize(this.busqueda)) || // Convierte a string para la comparación
        propiedad.valorNoche.toString().includes(normalize(this.busqueda)) // Convierte a string para la comparación
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
