import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-measurement-conversion',
  templateUrl: './measurement-conversion.component.html',
  styleUrls: ['./measurement-conversion.component.css']
})
export class MeasurementConversionComponent {
  inputString: string;
  conversionResults: number[];

  constructor(private http: HttpClient) {
    this.inputString = '';
    this.conversionResults = [];
  }

  convertMeasurements() {
    const url = `http://localhost:8080/convert-measurements?input=${this.inputString}`;
    this.http.get<number[]>(url).subscribe(
      results => {
        this.conversionResults = results;
      },
      error => {
        console.log('An error occurred:', error);
      }
    );
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
