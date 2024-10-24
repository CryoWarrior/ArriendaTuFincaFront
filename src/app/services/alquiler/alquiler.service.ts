import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquiler } from '../../models/Alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  private baseUrl = 'http://localhost:8082/api/alquileres'; 

  constructor(private http: HttpClient) {}

  getAlquileresPorUsuario(userId: number): Observable<Alquiler[]> {
    return this.http.get<Alquiler[]>(`${this.baseUrl}/usuario/${userId}`);
  }
  
  getSolicitudesPorPropietario(propietarioId: number): Observable<Alquiler[]> {
    return this.http.get<Alquiler[]>(`${this.baseUrl}/usuario/${propietarioId}/solicitudes`);
  }

  getAlquilerPorId(id: number): Observable<Alquiler> {
    return this.http.get<Alquiler>(`${this.baseUrl}/${id}`);
  }

  crearAlquiler(alquiler: Alquiler): Observable<Alquiler> {
    return this.http.post<Alquiler>(this.baseUrl, alquiler);
  }

  
  
}
