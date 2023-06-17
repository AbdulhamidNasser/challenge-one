

import { Component } from '@angular/core';

@Component({
  selector: 'app-measurement-conversion',
  templateUrl: './measurement-conversion.component.html',
  styleUrls: ['./measurement-conversion.component.css']
})
export class MeasurementConversionComponent {
  inputString: string = ''; // Provide an initial value
  conversionResults: number[] = []; // Provide an initial value

  convertMeasurements(str: string): void {
    this.conversionResults = this.isValidSeq(str) ? this.extractConversionResults(str) : [];
  }

  private extractConversionResults(str: string): number[] {
    const collectedValues: number[] = [];
    // Add the provided convertMeasurements logic here
    // ...

    return collectedValues;
  }

  private isValidSeq(str: string): boolean {
    const pattern = "^[a-z_]+$";
    const match = str.match(pattern);
    return !!match;
  }
}





/*

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

*/
