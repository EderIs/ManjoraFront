import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEditarDepartamentoComponent } from './nuevo-editar-departamento.component';

describe('NuevoEditarDepartamentoComponent', () => {
  let component: NuevoEditarDepartamentoComponent;
  let fixture: ComponentFixture<NuevoEditarDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEditarDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEditarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
