import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegistroComponent } from './registro/registro.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MisPropiedadesComponent } from './mispropiedades/mispropiedades.component';
import { AlquilerListaComponent } from './alquiler-lista/alquiler-lista.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent},
    { path: 'buscar', component: BuscarComponent },
    { path: 'mispropiedades', component: MisPropiedadesComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'alquileres', component: AlquilerListaComponent }
];

