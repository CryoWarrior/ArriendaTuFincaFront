import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-mispropiedades',
    standalone: true,
    templateUrl: './mispropiedades.component.html',
    styleUrls: ['./mispropiedades.component.css'],
    imports: [CommonModule]
})
export class MisPropiedadesComponent {
    // Seleccionamos solo una propiedad, por ejemplo, la primera
    property = {
        title: 'Departamento en el centro',
        price: '1.450.000 COP',
        location: 'Bogotá, Colombia',
        description: 'Un hermoso departamento en el corazón de la ciudad, cerca de todas las comodidades.',
        imageUrl: 'assets/depto1.jpg'
    };
}
