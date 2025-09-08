import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lista } from './lista/lista';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    Lista
  ],
  imports: [
    CommonModule,
    SharedModule
  ],

  exports: [
    Lista
  ]
})
export class Produtos2Module { }
