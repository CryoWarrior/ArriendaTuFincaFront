import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { RegistroComponent } from './registro/registro.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, RouterModule, RegistroComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArriendaTuFincaFront';
}
