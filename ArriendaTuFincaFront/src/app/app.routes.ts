import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component'; 
import { RegistroComponent } from './components/registro/registro.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MisPropiedadesComponent } from './components/mispropiedades/mispropiedades.component';
import { AlquilerListaComponent } from './components/alquiler-lista/alquiler-lista.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { MisPropiedadesComponent } from './components/mispropiedades/mispropiedades.component';
import { SolicitarArriendoComponent } from './components/solicitar-arriendo/solicitar-arriendo.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'registro', component: RegistroComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'editarPerfil', component: EditarPerfilComponent }, 
    { path: 'perfil', component: MiPerfilComponent, canActivate: [AuthGuard] }, 
    { path: 'home', component: HomeComponent},
    { path: 'buscar', component: BuscarComponent, canActivate: [AuthGuard] },
    { path: 'mispropiedades', component: MisPropiedadesComponent, canActivate: [AuthGuard] },
    { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
    { path: 'carrusel', component: CarouselComponent, canActivate: [AuthGuard] },
    { path: 'alquileres', component: AlquilerListaComponent, canActivate: [AuthGuard] },
    { path: 'solicitar-arriendo', component: SolicitarArriendoComponent, canActivate: [AuthGuard] },
];
