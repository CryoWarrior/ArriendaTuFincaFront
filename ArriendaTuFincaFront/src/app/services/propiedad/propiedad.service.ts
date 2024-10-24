import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { Propiedad } from '../../models/Propiedad';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  private apiUrl = 'http://localhost:8082/api/propiedades';

  constructor(private http: HttpClient) { }

  getPropiedadPorAlquilerNoAprobado(userId: number): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${this.apiUrl}/usuario/${userId}/sin-alquiler-aprobado`);
  }

  getPropiedadPorId(userId: number): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${this.apiUrl}/usuario/${userId}`);
  }

  putPropiedadPorID(propiedadId: number, propiedad: Propiedad): Observable<Propiedad> {
    return this.http.put<Propiedad>(`${this.apiUrl}/${propiedadId}`, propiedad);
  }

  crearPropiedad(propiedad: Propiedad): Observable<Propiedad> {
    return this.http.post<Propiedad>(`${this.apiUrl}`, propiedad);
  }

  getInfoPropiedadById(propiedadId: number): Observable<Propiedad> {
    return this.http.get<Propiedad>(`${this.apiUrl}/${propiedadId}`);
  }


}