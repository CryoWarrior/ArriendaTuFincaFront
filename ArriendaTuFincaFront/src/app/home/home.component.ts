import { Component} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  constructor(private router: Router){}

  irBuscar() {
    this.router.navigate(['/buscar']); 
  }
}