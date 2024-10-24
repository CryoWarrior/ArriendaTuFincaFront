import { Component} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  constructor(private router: Router){}

  irBuscar() {
    this.router.navigate(['/buscar']); 
  }

  images = [
    {
      imageSrc: 'assets/depto1.jpg',  // Ruta de la imagen
      imageAlt: 'Imagen 1'            // Texto alternativo
    },
    {
      imageSrc: 'assets/depto2.jpg',
      imageAlt: 'Imagen 2'
    },
    {
      imageSrc: 'assets/depto3.jpg',
      imageAlt: 'Imagen 3'
    }
  ];

  services = [
    { services: 'Servicio 1' },
    { services: 'Servicio 2' },
    { services: 'Servicio 3' }
  ];
}