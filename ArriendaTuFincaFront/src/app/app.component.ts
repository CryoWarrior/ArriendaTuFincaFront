import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AlquilerListaComponent } from './components/alquiler-lista/alquiler-lista.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { MisPropiedadesComponent } from './components/mispropiedades/mispropiedades.component';
import { DetallesSolicitudComponent } from './components/detalles-solicitud/detalles-solicitud.component';
import { DetallesAlquilerComponent } from './components/detalles-alquiler/detalles-alquiler.component';
import { MisAlquileresComponent } from './components/mis-alquileres/mis-alquileres.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { SolicitarArriendoComponent } from './components/solicitar-arriendo/solicitar-arriendo.component';
import { AnadirPropiedadComponent } from './components/anadir-propiedad/anadir-propiedad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, RouterModule, RegistroComponent, BuscarComponent, LoginComponent, CommonModule, MisPropiedadesComponent, 
    MisAlquileresComponent, HeaderComponent, SolicitarArriendoComponent, MiPerfilComponent, EditarPerfilComponent, AnadirPropiedadComponent,
     SolicitudesComponent, DetallesSolicitudComponent, DetallesAlquilerComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArriendaTuFincaFront';
}
