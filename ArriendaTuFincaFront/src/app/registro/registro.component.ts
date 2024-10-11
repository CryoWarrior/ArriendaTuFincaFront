import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service'; 
import { Usuario } from '../models/Usuario'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule], 
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService,  private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]], 
      edad: ['', [Validators.required, Validators.min(18)]]
    });
  }

  mensaje: string = '';

  registrarUsuario() {
    if (this.registroForm.valid) {
      const nuevoUsuario: Usuario = new Usuario(
        null,
        this.registroForm.value.nombre,
        this.registroForm.value.apellido,
        this.registroForm.value.correo,
        this.registroForm.value.contrasenia,
        this.registroForm.value.edad, 
        null
      );

      console.log('Datos enviados:', nuevoUsuario); 
  
      this.usuarioService.crearUsuario(nuevoUsuario)
        .then(response => {
          console.log('Usuario registrado correctamente:', response);
          this.mensaje = 'Usuario registrado correctamente';
          this.registroForm.reset();
          this.router.navigate(['/buscar']); 
        })
        .catch(error => {
          console.error('Error al registrar usuario:', error);
          this.mensaje = 'Error al registrar usuario';
        });
    }
  }
}  