import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line

import { AppComponent } from './app.component';
import { MeasurementConversionComponent } from './measurement-conversion/measurement-conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementConversionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
