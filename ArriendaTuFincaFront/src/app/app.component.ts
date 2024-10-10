import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { LoginComponent } from './login/login.component'; 
import { RegistroComponent } from './registro/registro.component'; 
import { BuscarComponent } from './buscar/buscar.component'; 


@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, RouterModule, RegistroComponent, BuscarComponent, LoginComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArriendaTuFincaFront';
}
