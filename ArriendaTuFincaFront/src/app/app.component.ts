import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MisPropiedadesComponent } from './components/mispropiedades/mispropiedades.component';
import { AlquilerListaComponent } from './components/alquiler-lista/alquiler-lista.component'; 
import { DetallesSolicitudComponent } from './components/detalles-solicitud/detalles-solicitud.component';
import { MisAlquileresComponent } from './components/mis-alquileres/mis-alquileres.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { HeaderComponent } from './components/header/header.component'; 
import { SolicitarArriendoComponent } from './components/solicitar-arriendo/solicitar-arriendo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, RouterModule, RegistroComponent, BuscarComponent, LoginComponent, CommonModule, MisPropiedadesComponent, 
    MisAlquileresComponent, HeaderComponent, SolicitarArriendoComponent, SolicitudesComponent, DetallesSolicitudComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArriendaTuFincaFront';
}
