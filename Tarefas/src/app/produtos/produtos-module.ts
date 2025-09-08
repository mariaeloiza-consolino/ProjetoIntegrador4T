import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing-module';
import { Estoque } from './estoque/estoque';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    Estoque
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatTableModule
    
  ]
})
export class ProdutosModule { }
