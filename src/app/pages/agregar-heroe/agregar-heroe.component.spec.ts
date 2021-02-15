import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHeroeComponent } from './agregar-heroe.component';

describe('AgregarHeroeComponent', () => {
  let component: AgregarHeroeComponent;
  let fixture: ComponentFixture<AgregarHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
