import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEditarPuestoComponent } from './nuevo-editar-puesto.component';

describe('NuevoEditarPuestoComponent', () => {
  let component: NuevoEditarPuestoComponent;
  let fixture: ComponentFixture<NuevoEditarPuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEditarPuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEditarPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
