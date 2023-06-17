


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-measurement-conversion',
  templateUrl: './measurement-conversion.component.html',
  styleUrls: ['./measurement-conversion.component.css']
})
export class MeasurementConversionComponent {
  measurementInput: string = '';
  measurementResult: string[] = [];

  constructor(private http: HttpClient) {}

  measure(): void {
    const input = this.measurementInput.trim();

    // Make a GET request to the API endpoint to measure the input
    this.http.get<string[]>(`/convert-measurements?input=${input}`)
      .subscribe(data => {
        this.measurementResult = data;
      }, error => {
        console.error('Error:', error);
      });
  }

  login(name: string, password: string): void {
    // Make a POST request to the API endpoint to authenticate the user
    this.http.post('/login', { name, password })
      .subscribe(data => {
        // Handle the authentication response
        console.log(data);
      }, error => {
        console.error('Error:', error);
      });
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
