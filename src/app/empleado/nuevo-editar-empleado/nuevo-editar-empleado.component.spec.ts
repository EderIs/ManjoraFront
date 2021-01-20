import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEditarEmpleadoComponent } from './nuevo-editar-empleado.component';

describe('NuevoEditarEmpleadoComponent', () => {
  let component: NuevoEditarEmpleadoComponent;
  let fixture: ComponentFixture<NuevoEditarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEditarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEditarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
