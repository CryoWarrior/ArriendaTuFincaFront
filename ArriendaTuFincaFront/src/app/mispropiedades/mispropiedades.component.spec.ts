import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPropiedadesComponent } from './mispropiedades.component';

describe('MisPropiedadesComponent', () => {
  let component: MisPropiedadesComponent;
  let fixture: ComponentFixture<MisPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisPropiedadesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});

