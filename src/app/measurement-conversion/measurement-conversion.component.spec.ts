import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementConversionComponent } from './measurement-conversion.component';

describe('MeasurementConversionComponent', () => {
  let component: MeasurementConversionComponent;
  let fixture: ComponentFixture<MeasurementConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeasurementConversionComponent]
    });
    fixture = TestBed.createComponent(MeasurementConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
