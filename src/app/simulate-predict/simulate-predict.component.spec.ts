import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatePredictComponent } from './simulate-predict.component';

describe('SimulatePredictComponent', () => {
  let component: SimulatePredictComponent;
  let fixture: ComponentFixture<SimulatePredictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatePredictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatePredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
