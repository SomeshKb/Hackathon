import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTwinOverviewComponent } from './digital-twin-overview.component';

describe('DigitalTwinOverviewComponent', () => {
  let component: DigitalTwinOverviewComponent;
  let fixture: ComponentFixture<DigitalTwinOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalTwinOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalTwinOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
