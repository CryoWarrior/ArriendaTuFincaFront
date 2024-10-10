import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Componente de registro
import { RegistroComponent } from './registro/registro.component'; 
import { BuscarComponent } from './buscar/buscar.component';
import { AlquilerListaComponent } from './alquiler-lista/alquiler-lista.component';


export const routes: Routes = [
    { path: 'registro', component: RegistroComponent },  
    { path: 'login', component: LoginComponent },  
    { path: 'buscar', component: BuscarComponent },
    { path: 'alquileres', component: AlquilerListaComponent }
];
