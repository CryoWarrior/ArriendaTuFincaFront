import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MisPropiedadesComponent } from './mispropiedades/mispropiedades.component';
import { AlquilerListaComponent } from './alquiler-lista/alquiler-lista.component'; 
import { HeaderComponent } from './header/header.component'; 


@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, RouterModule, RegistroComponent, BuscarComponent, LoginComponent, CommonModule, MisPropiedadesComponent, AlquilerListaComponent, HeaderComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArriendaTuFincaFront';
}
