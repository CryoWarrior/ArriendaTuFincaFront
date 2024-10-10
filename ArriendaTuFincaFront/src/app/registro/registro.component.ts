import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';  // Importar el servicio
import { Usuario } from '../models/Usuario';  // Importar el modelo que usas
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],  // ReactiveFormsModule para trabajar con FormBuilder
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]], // Validación de contraseña
      edad: ['', [Validators.required, Validators.min(18)]], // Ejemplo: edad mínima de 18 años
      tipoUsuario: ['', Validators.required],  // Validación para tipoUsuario
      comentarios: ['', Validators.required]  // Campo opcional
    });
  }

  mensaje: string = '';

  registrarUsuario() {
    if (this.registroForm.valid) {
      const nuevoUsuario: Usuario = new Usuario(
        null, // id se generará automáticamente
        this.registroForm.value.nombre,
        this.registroForm.value.apellido,
        this.registroForm.value.correo,
        this.registroForm.value.contrasenia,
        this.registroForm.value.edad,
        Number(this.registroForm.value.tipoUsuario), // Convierte el valor a número
        this.registroForm.value.comentarios 
      );

      console.log('Datos enviados:', nuevoUsuario); // Log para verificar los datos
  
      this.usuarioService.crearUsuario(nuevoUsuario)
        .then(response => {
          console.log('Usuario registrado correctamente:', response);
          this.mensaje = 'Usuario registrado correctamente';
          this.registroForm.reset();
        })
        .catch(error => {
          console.error('Error al registrar usuario:', error);
          this.mensaje = 'Error al registrar usuario';
        });
    }
  }
}  