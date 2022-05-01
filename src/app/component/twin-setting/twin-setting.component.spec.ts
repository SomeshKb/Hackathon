import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinSettingComponent } from './twin-setting.component';

describe('TwinSettingComponent', () => {
  let component: TwinSettingComponent;
  let fixture: ComponentFixture<TwinSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwinSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwinSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
