import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarArriendoComponent } from './solicitar-arriendo.component';

describe('SolicitarArriendoComponent', () => {
  let component: SolicitarArriendoComponent;
  let fixture: ComponentFixture<SolicitarArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarArriendoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
