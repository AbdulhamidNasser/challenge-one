


import { Component } from '@angular/core';
import { MeasurementConversionService } from '../measurement-conversion.service';

@Component({
  selector: 'app-measurement-conversion',
  templateUrl: './measurement-conversion.component.html',
  styleUrls: ['./measurement-conversion.component.css']
})
export class MeasurementConversionComponent {
  inputString!: string; // Add the definite assignment assertion operator (!)
  conversionResults!: any[]; // Add the definite assignment assertion operator (!)

  constructor(private measurementConversionService: MeasurementConversionService) {}

  convertMeasurements(): void {
    this.measurementConversionService.convertMeasurements(this.inputString)
      .subscribe((results) => {
        this.conversionResults = results;
      });
  }
}