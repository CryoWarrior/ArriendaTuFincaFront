import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Propiedad } from '../models/Propiedad'; 
import { PropiedadUsuarioService } from '../services/propiedad/propiedadUsuario.service';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, HeaderComponent],
  templateUrl: './mispropiedades.component.html',
  styleUrls: ['./mispropiedades.component.css']
})

export class MisPropiedadesComponent{
  propiedades: Propiedad[] = [];
  mensaje: string = '';

  constructor(private propiedadUsuarioService: PropiedadUsuarioService) {}

  ngOnInit(): void {
    this.getPropiedadesPorId(); 
  }

  getPropiedadesPorId():void{
    const userId = 2;
    this.propiedadUsuarioService.getPropiedadPorId(userId).subscribe({
      next: (propiedades) => {
        this.propiedades = propiedades;
      },
      error: (err) => {
        console.error('Error al obtener los alquileres', err);
        this.mensaje = `Error al cargar los alquileres: ${err.message || err.toString()}`;
      }
    });
  }


}