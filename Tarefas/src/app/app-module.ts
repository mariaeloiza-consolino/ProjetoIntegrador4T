import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Produtos2Module } from './produtos2/produtos2-module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    App,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    Produtos2Module,
    MatToolbarModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
