import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { Propiedad } from '../../models/Propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  private apiUrl = 'http://localhost:8082/propiedades/sin-alquiler-aprobado'; 

  constructor() { }

  obtenerPropiedades(): Promise<Propiedad[]> {
    return axios.get<Propiedad[]>(this.apiUrl)
      .then(response => 
        response.data.map((propiedad: Propiedad) => ({
          ...propiedad,
          propietarioNombre: `${propiedad.propietario.nombre}` 
        }))
      );
  }
}
