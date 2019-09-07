import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


const matcomponents = [
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];


@NgModule({
  exports: [
    matcomponents
  ],
  imports: [
    matcomponents
  ]
})
export class MaterialModule { }
