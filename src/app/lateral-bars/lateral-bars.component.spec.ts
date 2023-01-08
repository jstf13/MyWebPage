import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralBarsComponent } from './lateral-bars.component';

describe('LateralBarsComponent', () => {
  let component: LateralBarsComponent;
  let fixture: ComponentFixture<LateralBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
