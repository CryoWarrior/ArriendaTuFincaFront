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
<<<<<<< HEAD
import { AlquilerListaComponent } from './components/alquiler-lista/alquiler-lista.component';
import { HeaderComponent } from './components/header/header.component';
=======
>>>>>>> 161df35f6e9ab67b2fc58230d14184c2c31d0fd4
import { SolicitarArriendoComponent } from './components/solicitar-arriendo/solicitar-arriendo.component';
import { AnadirPropiedadComponent } from './components/anadir-propiedad/anadir-propiedad.component';

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD

  imports: [RouterOutlet, RouterModule, RegistroComponent, BuscarComponent, LoginComponent, CommonModule, MisPropiedadesComponent, AlquilerListaComponent, HeaderComponent, SolicitarArriendoComponent, AnadirPropiedadComponent],
=======
  
  imports: [RouterOutlet, RouterModule, 
    RegistroComponent, BuscarComponent, LoginComponent, CommonModule, 
    MisPropiedadesComponent, AlquilerListaComponent, HeaderComponent, SolicitarArriendoComponent
    , MiPerfilComponent,EditarPerfilComponent], 
>>>>>>> 161df35f6e9ab67b2fc58230d14184c2c31d0fd4
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArriendaTuFincaFront';
}
