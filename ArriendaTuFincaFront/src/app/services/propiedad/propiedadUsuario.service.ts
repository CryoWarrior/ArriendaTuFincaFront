import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Propiedad } from '../../models/Propiedad';

@Injectable({
    providedIn: 'root'
  })
  export class PropiedadUsuarioService {
  
    private baseUrl = 'http://localhost:8082/propiedades'; 
  
    constructor(private http: HttpClient) {}
  
    getPropiedadPorId(userId: number): Observable<Propiedad[]> {
      return this.http.get<Propiedad[]>(`${this.baseUrl}/usuario/${userId}`);
    }
  }
  