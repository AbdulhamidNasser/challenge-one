

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementConversionComponent } from './measurement-conversion/measurement-conversion.component';

const routes: Routes = [
  { path: 'convert', component: MeasurementConversionComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
