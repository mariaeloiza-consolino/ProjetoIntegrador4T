import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AngularRoutingModule } from './angular-routing-module';
import { Biblioteca } from './biblioteca/biblioteca';


@NgModule({
  declarations: [
    Biblioteca
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    MatToolbarModule
  ]
})
export class AngularModule { }
