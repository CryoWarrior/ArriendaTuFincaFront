import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAlquilerComponent } from './detalles-alquiler.component';

describe('DetallesAlquilerComponent', () => {
  let component: DetallesAlquilerComponent;
  let fixture: ComponentFixture<DetallesAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesAlquilerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
