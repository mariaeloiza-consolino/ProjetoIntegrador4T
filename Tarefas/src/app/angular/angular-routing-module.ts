import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Biblioteca } from './biblioteca/biblioteca';

const routes: Routes = [
  {path: 'biblioteca', component: Biblioteca}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
