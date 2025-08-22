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
import { DataBinding } from './data-binding/data-binding';
import { FormsModule } from '@angular/forms';
import { NestedDetaClass } from './nested-deta-class/nested-deta-class';
import { StructuralDirective } from './structural-directive/structural-directive';
import { Pipedirective } from './pipedirective/pipedirective';
import { ParentToChild } from './parent-to-child/parent-to-child';

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
    Parent,
    DataBinding,
    NestedDetaClass,
    StructuralDirective,
    Pipedirective,
    ParentToChild
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [Parent]
})
export class AppModule { }
