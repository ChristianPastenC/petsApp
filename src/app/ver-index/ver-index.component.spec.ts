import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerIndexComponent } from './ver-index.component';

describe('VerIndexComponent', () => {
  let component: VerIndexComponent;
  let fixture: ComponentFixture<VerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
