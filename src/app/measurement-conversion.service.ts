import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementConversionService {
  private apiUrl = 'http://localhost:8080/api/convert'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  convertMeasurements(inputString: string): Observable<any> {
    const params = { 'convert-measurements': inputString };
    return this.http.get<any>(this.apiUrl, { params });
  }
}