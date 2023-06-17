import { TestBed } from '@angular/core/testing';

import { MeasurementConversionService } from './measurement-conversion.service';

describe('MeasurementConversionService', () => {
  let service: MeasurementConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasurementConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
