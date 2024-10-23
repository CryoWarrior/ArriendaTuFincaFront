import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
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

  constructor(private router: Router,private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.usuarioActual = this.usuarioService.getUsuarioActual();
  }

  editProfile(): void {
    this.router.navigate(['/editarPerfil']);
  }
}
