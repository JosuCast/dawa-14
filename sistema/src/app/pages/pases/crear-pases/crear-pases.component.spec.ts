import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPasesComponent } from './crear-pases.component';

describe('CrearPasesComponent', () => {
  let component: CrearPasesComponent;
  let fixture: ComponentFixture<CrearPasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPasesComponent]
    });
    fixture = TestBed.createComponent(CrearPasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
