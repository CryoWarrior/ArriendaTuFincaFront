import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Componente de registro
import { RegistroComponent } from './registro/registro.component'; 
import { BuscarComponent } from './buscar/buscar.component';


export const routes: Routes = [
    { path: 'registro', component: RegistroComponent },  
    { path: 'login', component: LoginComponent },  // Ruta para el inicio de sesion
    { path: 'buscar', component: BuscarComponent } 

];
