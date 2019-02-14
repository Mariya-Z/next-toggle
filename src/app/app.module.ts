import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToggleLibModule } from 'toggle-lib';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToggleLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
