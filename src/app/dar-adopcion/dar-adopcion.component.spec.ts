import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarAdopcionComponent } from './dar-adopcion.component';

describe('DarAdopcionComponent', () => {
  let component: DarAdopcionComponent;
  let fixture: ComponentFixture<DarAdopcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarAdopcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
