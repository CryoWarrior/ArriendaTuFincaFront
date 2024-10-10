import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { LoginComponent } from './login/login.component'; // Componente de registro
import { RegistroComponent } from './registro/registro.component'; // Componente de registro

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, RouterModule, RegistroComponent,LoginComponent], // Importa tus componentes aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArriendaTuFincaFront';
}
