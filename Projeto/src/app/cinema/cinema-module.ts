import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing-module';
import { Cadastrar } from './cadastrar/cadastrar';


@NgModule({
  declarations: [
    Cadastrar
  ],
  imports: [
    CommonModule,
    CinemaRoutingModule
  ]
})
export class CinemaModule { }
