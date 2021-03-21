import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesCssComponent } from './slides-css.component';

describe('SlidesCssComponent', () => {
  let component: SlidesCssComponent;
  let fixture: ComponentFixture<SlidesCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
