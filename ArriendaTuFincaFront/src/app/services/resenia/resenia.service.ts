import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resenia } from '../../models/Resenia';
@Injectable({
  providedIn: 'root'
})
export class ReseniaService {
  private apiUrl = 'http://localhost:8082/api/resenias'; 

  constructor(private http: HttpClient) {}

  // Obtener reseñas que pertenecen a un usuario (inquilino)
  getReseniasPorUsuario(idUsuario: number): Observable<Resenia[]> {
    return this.http.get<Resenia[]>(`${this.apiUrl}/usuario?idUsuario=${idUsuario}`);
  }

}
