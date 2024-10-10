import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component'; 
import { BuscarComponent } from './buscar/buscar.component';


export const routes: Routes = [
    { path: 'registro', component: RegistroComponent },  
    { path: 'buscar', component: BuscarComponent } 

];
