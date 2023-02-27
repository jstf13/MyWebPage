import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereIVeWorkedComponent } from './where-ive-worked.component';

describe('WhereIVeWorkedComponent', () => {
  let component: WhereIVeWorkedComponent;
  let fixture: ComponentFixture<WhereIVeWorkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereIVeWorkedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereIVeWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
