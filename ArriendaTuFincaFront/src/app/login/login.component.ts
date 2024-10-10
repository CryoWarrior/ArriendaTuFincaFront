import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service'; // Importar el servicio

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  mensaje: string = '';
  mensajeColor: string = ''; // Property to hold the color value

  iniciarSesion() {
    if (this.loginForm.valid) {
      const correo = this.loginForm.value.correo;
      const contrasenia = this.loginForm.value.contrasenia;

      console.log('Datos enviados:', correo, contrasenia); 
  
      this.usuarioService.checkCorreo(correo)
        .then(response => {
          if(response === 'Correo No Encontrado') {
            this.mensaje = response;
            this.mensajeColor = 'red'; // Set the color to red
          }
          else {
            this.usuarioService.checkContrasenia(correo,contrasenia)
              .then(response => {
                if(response === 'Contraseña Incorrecta') {
                  this.mensaje = response;
                  this.mensajeColor = 'red'; // Set the color to red
                }
                else {
                  this.mensaje = 'Usuario Iniciado';
                  this.mensajeColor = 'green'; // Set the color to green
                }
              }
              )
          }
          
        })
        .catch(error => {
          console.error('Error al iniciar usuario:', error);
          this.mensaje = 'Error al iniciar usuario';
          this.mensajeColor = 'red'; // Set the color to red
        });
    }
  }
}
