import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent implements OnInit {

  usuarioActual: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const usuarioActualString = localStorage.getItem("usuarioActual");
    if (usuarioActualString) { 
        this.usuarioActual = JSON.parse(usuarioActualString); 
    }
  }

  editProfile(): void {
    this.router.navigate(['/editarPerfil']);
  }
}
