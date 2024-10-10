import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlquilerListaComponent } from './alquiler-lista.component';
import { CommonModule } from '@angular/common'; 

describe('AlquilerListaComponent', () => {
  let component: AlquilerListaComponent;
  let fixture: ComponentFixture<AlquilerListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule], 
      declarations: [AlquilerListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlquilerListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/*
  it('should display the correct title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Mis Alquileres');
  });

  it('should display "No tienes alquileres asignados" if no rentals', () => {
    component.alquileres = [];
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('No tienes alquileres asignados');
  });

  it('should display alquiler items when alquileres are present', () => {
    component.alquileres = [
      {
        propiedad: { direccion: 'Calle 123' },
        fechaInicio: '2024-10-01',
        fechaFin: '2024-10-15',
        estado: PENDIENTE,
        comentarios: 'Buen estado'
      }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const alquilerItems = compiled.querySelectorAll('.alquiler-item');
    expect(alquilerItems.length).toBe(1);
    expect(alquilerItems[0].textContent).toContain('Calle 123');
    expect(alquilerItems[0].textContent).toContain('PENDIENTE');
  });
*/