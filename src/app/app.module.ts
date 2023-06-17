import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasurementConversionComponent } from './measurement-conversion/measurement-conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementConversionComponent,
     // other declarations...
  MeasurementConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // other imports...
  HttpClientModule,
   // other imports...
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


