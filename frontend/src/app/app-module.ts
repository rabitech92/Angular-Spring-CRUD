import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Patient } from './patient/patient';
import { Doctor } from './doctor/doctor';
import { Mysoft } from './mysoft/mysoft';
import { Test } from './test/test';

@NgModule({
  declarations: [
    App,
    Patient,
    Doctor,
    Mysoft,
    Test
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
