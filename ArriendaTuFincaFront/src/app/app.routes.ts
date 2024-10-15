import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegistroComponent } from './registro/registro.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MisPropiedadesComponent } from './mispropiedades/mispropiedades.component';
import { AlquilerListaComponent } from './alquiler-lista/alquiler-lista.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard'; 

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'registro', component: RegistroComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'home', component: HomeComponent},
    { path: 'buscar', component: BuscarComponent, canActivate: [AuthGuard] },
    { path: 'mispropiedades', component: MisPropiedadesComponent, canActivate: [AuthGuard] },
    { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
    { path: 'alquileres', component: AlquilerListaComponent, canActivate: [AuthGuard] }
];
