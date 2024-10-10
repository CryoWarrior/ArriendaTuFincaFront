import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPropiedadesComponent } from './mispropiedades.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('MisPropiedadesComponent', () => {
    let component: MisPropiedadesComponent;
    let fixture: ComponentFixture<MisPropiedadesComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MisPropiedadesComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MisPropiedadesComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;

        // Configuramos el componente con una única propiedad
        component.property = {
            title: 'Departamento en el centro',
            price: '850 USD',
            location: 'Bogotá, Colombia',
            description: 'Un hermoso departamento en el corazón de la ciudad, cerca de todas las comodidades.',
            imageUrl: 'assets/depto1.jpg'
        };
        fixture.detectChanges();
    });

    it('debería crear el componente', () => {
        expect(component).toBeTruthy();
    });

    it('debería mostrar el título de la propiedad', () => {
        const titleElement = debugElement.query(By.css('.property-details h2')).nativeElement;
        expect(titleElement.textContent).toContain('Departamento en el centro');
    });

    it('debería mostrar la imagen de la propiedad', () => {
        const imageElement = debugElement.query(By.css('.property-card img')).nativeElement;
        expect(imageElement.src).toContain(component.property.imageUrl);
    });

    it('debería mostrar el precio de la propiedad', () => {
        const priceElement = debugElement.query(By.css('.property-details .price')).nativeElement;
        expect(priceElement.textContent).toContain('850 USD');
    });

    it('debería mostrar la ubicación de la propiedad', () => {
        const locationElement = debugElement.query(By.css('.property-details .location')).nativeElement;
        expect(locationElement.textContent).toContain('Bogotá, Colombia');
    });

    it('debería mostrar la descripción de la propiedad', () => {
        const descriptionElement = debugElement.query(By.css('.property-details .description')).nativeElement;
        expect(descriptionElement.textContent).toContain('Un hermoso departamento en el corazón de la ciudad');
    });
});

