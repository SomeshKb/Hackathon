import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDigitalTwinComponent } from './create-digital-twin.component';

describe('CreateDigitalTwinComponent', () => {
  let component: CreateDigitalTwinComponent;
  let fixture: ComponentFixture<CreateDigitalTwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDigitalTwinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDigitalTwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
