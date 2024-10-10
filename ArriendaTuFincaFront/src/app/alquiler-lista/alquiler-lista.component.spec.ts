import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerListaComponent } from './alquiler-lista.component';

describe('AlquilerListaComponent', () => {
  let component: AlquilerListaComponent;
  let fixture: ComponentFixture<AlquilerListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlquilerListaComponent]
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
