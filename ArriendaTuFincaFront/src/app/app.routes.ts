import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MisPropiedadesComponent } from './components/mispropiedades/mispropiedades.component';
import { AlquilerListaComponent } from './components/alquiler-lista/alquiler-lista.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { SolicitarArriendoComponent } from './components/solicitar-arriendo/solicitar-arriendo.component';
import { AnadirPropiedadComponent } from './components/anadir-propiedad/anadir-propiedad.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscarComponent, canActivate: [AuthGuard] },
    { path: 'mispropiedades', component: MisPropiedadesComponent, canActivate: [AuthGuard] },
    { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
    { path: 'carrusel', component: CarouselComponent, canActivate: [AuthGuard] },
    { path: 'alquileres', component: AlquilerListaComponent, canActivate: [AuthGuard] },
    { path: 'solicitar-arriendo', component: SolicitarArriendoComponent, canActivate: [AuthGuard] },
    { path: 'anadir-propiedad', component: AnadirPropiedadComponent },
    { path: 'editar-propiedad/:id', component: AnadirPropiedadComponent }
];
