import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  mensaje: string = '';
  mensajeColor: string = ''; 

  iniciarSesion() {
    if (this.loginForm.valid) {
      const correo = this.loginForm.value.correo;
      const contrasenia = this.loginForm.value.contrasenia;

      console.log('Datos enviados:', correo, contrasenia); 
  
      this.usuarioService.checkCorreo(correo)
        .then(usuario => {
          if (!usuario) {
            this.mensaje = 'Correo No Encontrado';
            this.mensajeColor = 'red'; 
          } else {
            this.usuarioService.checkContrasenia(correo, contrasenia)
              .then(usuarioAutenticado => {
                if (!usuarioAutenticado) {
                  this.mensaje = 'Contraseña Incorrecta';
                  this.mensajeColor = 'red'; 
                } else {
                  this.mensaje = 'Usuario Iniciado';
                  this.mensajeColor = 'green'; 
                  console.log('Usuario actual:', usuarioAutenticado);
                  this.router.navigate(['/home']); 
                }
              });
          }
        })
        .catch(error => {
          console.error('Error al iniciar usuario:', error);
          this.mensaje = 'Error al iniciar usuario';
          this.mensajeColor = 'red'; 
        });
    }
  }

  irRegistro() {
    this.router.navigate(['/registro']); 
  }
}