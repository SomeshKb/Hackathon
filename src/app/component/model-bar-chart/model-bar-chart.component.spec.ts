import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBarChartComponent } from './model-bar-chart.component';

describe('ModelBarChartComponent', () => {
  let component: ModelBarChartComponent;
  let fixture: ComponentFixture<ModelBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
