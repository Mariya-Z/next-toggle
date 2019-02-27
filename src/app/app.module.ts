import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NextToggleModule} from 'next-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NextToggleModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
