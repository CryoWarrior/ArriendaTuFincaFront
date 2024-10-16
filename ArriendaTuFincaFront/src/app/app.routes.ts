import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; 
import { RegistroComponent } from './registro/registro.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MisPropiedadesComponent } from './components/mispropiedades/mispropiedades.component';
import { AlquilerListaComponent } from './components/alquiler-lista/alquiler-lista.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { SolicitarArriendoComponent } from './components/solicitar-arriendo/solicitar-arriendo.component'; 

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'registro', component: RegistroComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'home', component: HomeComponent},
    { path: 'buscar', component: BuscarComponent, canActivate: [AuthGuard] },
    { path: 'mispropiedades', component: MisPropiedadesComponent, canActivate: [AuthGuard] },
    { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
    { path: 'alquileres', component: AlquilerListaComponent, canActivate: [AuthGuard] },
    { path: 'solicitar-arriendo', component: SolicitarArriendoComponent, canActivate: [AuthGuard] },
];
