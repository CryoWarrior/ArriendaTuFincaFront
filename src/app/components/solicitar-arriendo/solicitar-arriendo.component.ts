import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Propiedad } from '../../models/Propiedad';
import { Alquiler, EstadoAlquiler } from '../../models/Alquiler';
import { AlquilerService } from '../../services/alquiler/alquiler.service';
import { PropiedadService } from '../../services/propiedad/propiedad.service'; // Asegúrate de importar el servicio de propiedad
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-solicitar-arriendo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitar-arriendo.component.html',
  styleUrls: ['./solicitar-arriendo.component.css']
})
export class SolicitarArriendoComponent implements OnInit {
  propiedad?: Propiedad;
  alquiler: Alquiler = new Alquiler();
  fechaInicio: string = '';
  fechaFin: string = '';
  errorMensaje: string = '';

  constructor(
    private router: Router,
    private alquilerService: AlquilerService,
    private propiedadService: PropiedadService // Añadir el servicio de propiedad
  ) { }

  ngOnInit() {
    const state = history.state;
    if (state && state.propiedad) {
      this.propiedad = state.propiedad;
      this.alquiler.propiedad = this.propiedad!;
    } else {
      console.error('No se recibió información de la propiedad');
      this.errorMensaje = 'No se recibió información de la propiedad';
    }

    const usuarioActualString = localStorage.getItem('usuarioActual');
    if (usuarioActualString) {
      this.alquiler.usuarioAsignado = JSON.parse(usuarioActualString) as Usuario;
    } else {
      console.error('No se encontró el usuario actual en localStorage');
      this.errorMensaje = 'No se encontró el usuario actual en la sesión';
    }
  }

  validarFechas() {
    this.errorMensaje = '';

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const fechaInicioDate = new Date(this.fechaInicio);
    const fechaFinDate = new Date(this.fechaFin);

    if (this.fechaInicio && fechaInicioDate < hoy) {
      this.errorMensaje = 'La fecha de inicio no puede ser anterior o igual a la fecha actual.';
      return false;
    }

    if (this.fechaInicio && this.fechaFin && fechaFinDate < fechaInicioDate) {
      this.errorMensaje = 'La fecha de fin no puede ser anterior a la fecha de inicio.';
      return false;
    }

    return true;
  }

  onFechaInicioChange() {
    this.validarFechas();
  }

  onFechaFinChange() {
    this.validarFechas();
  }

  onSubmit() {
    if (!this.validarFechas()) {
      return;
    }

    this.alquiler.fechaInicio = this.fechaInicio;
    this.alquiler.fechaFin = this.fechaFin;
    this.alquiler.estado = EstadoAlquiler.PENDIENTE;
    this.alquiler.comentarios = '';

    // Primero, enviar la solicitud para crear el alquiler
    this.alquilerService.crearAlquiler(this.alquiler).subscribe({
      next: (response) => {
        console.log('Alquiler creado con éxito', response);

        // Si la propiedad existe, proceder con el cambio del atributo 'disponible' a false
        if (this.propiedad && this.propiedad.id !== null && this.propiedad.id !== undefined) {
          this.propiedad.disponible = false;
          this.propiedadService.putPropiedadPorID(this.propiedad.id, this.propiedad).subscribe({
            next: () => {
              console.log('Propiedad actualizada con éxito');
              this.router.navigate(['/buscar']); // Redirigir a la página correspondiente
            },
            error: (error) => {
              console.error('Error al actualizar la propiedad', error);
              this.errorMensaje = 'Hubo un error al actualizar la disponibilidad de la propiedad. Sin embargo, el alquiler se creó correctamente.';
            }
          });
        } else {
          console.error('ID de propiedad no válido:', this.propiedad?.id);
          this.router.navigate(['/buscar']); // Redirigir en caso de que no haya propiedad que actualizar
        }
      },
      error: (error) => {
        console.error('Error al crear el alquiler', error);
        this.errorMensaje = 'Hubo un error al crear el alquiler. Inténtalo de nuevo.';
      }
    });
  }
}


