import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeasurementConversionComponent } from './measurement-conversion/measurement-conversion.component';

const routes: Routes = [
  { path: 'measurement-conversion', component: MeasurementConversionComponent },
  // Other routes if any
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }