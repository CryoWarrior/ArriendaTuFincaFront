import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquiler } from '../../models/Alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  private baseUrl = 'http://localhost:8082/alquileres'; 

  constructor(private http: HttpClient) {}

  getAlquileresPorUsuario(userId: number): Observable<Alquiler[]> {
    return this.http.get<Alquiler[]>(`${this.baseUrl}/usuario/${userId}`);
  }
}
