import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegistroComponent } from './registro/registro.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MisPropiedadesComponent } from './mispropiedades/mispropiedades.component';
import { AlquilerListaComponent } from './alquiler-lista/alquiler-lista.component';



export const routes: Routes = [
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'mispropiedades', component: MisPropiedadesComponent},
    { path: 'alquileres', component: AlquilerListaComponent }
];

