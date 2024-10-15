import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { Propiedad } from '../../models/Propiedad';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  private apiUrl = 'http://localhost:8082/propiedades'; 

  constructor(private http: HttpClient) { }

  getPropiedadPorId(userId: number): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${this.apiUrl}/usuario/${userId}/sin-alquiler-aprobado`);
  }
}
