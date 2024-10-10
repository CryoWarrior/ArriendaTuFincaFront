import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Componente de registro
import { RegistroComponent } from './registro/registro.component'; // Tu componente de registro


export const routes: Routes = [
    { path: 'registro', component: RegistroComponent },  // Ruta para el registro de usuarios
    { path: 'login', component: LoginComponent },  // Ruta para el inicio de sesion
    // Puedes añadir más rutas aquí según lo necesites
];
