import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Patient } from './patient/patient';
import { Doctor } from './doctor/doctor';
import { Mysoft } from './mysoft/mysoft';
import { Test } from './test/test';
import { Sinha } from './sinha/sinha';
import { VoidButton } from './void-button/void-button';
import { Rabiul } from './rabiul/rabiul';
import { Child } from './child/child';
import { Parent } from './parent/parent';

@NgModule({
  declarations: [
    App,
    Patient,
    Doctor,
    Mysoft,
    Test,
    Sinha,
    VoidButton,
    Rabiul,
    Child,
    Parent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [Parent]
})
export class AppModule { }
