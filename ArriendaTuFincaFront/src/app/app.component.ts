import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 


import { LoginComponent } from './login/login.component'; 
import { RegistroComponent } from './registro/registro.component'; 
import { BuscarComponent } from './buscar/buscar.component'; 
import { AlquilerListaComponent } from './alquiler-lista/alquiler-lista.component'; 


@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, RouterModule, RegistroComponent, BuscarComponent, LoginComponent,CommonModule, AlquilerListaComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArriendaTuFincaFront';
}
