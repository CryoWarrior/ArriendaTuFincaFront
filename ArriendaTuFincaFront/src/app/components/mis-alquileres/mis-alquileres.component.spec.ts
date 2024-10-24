import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisAlquileresComponent } from './mis-alquileres.component';

describe('MisAlquileresComponent', () => {
  let component: MisAlquileresComponent;
  let fixture: ComponentFixture<MisAlquileresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisAlquileresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisAlquileresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
