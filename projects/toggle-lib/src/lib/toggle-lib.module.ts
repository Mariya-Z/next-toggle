import { NgModule } from '@angular/core';
import { ToggleLibComponent } from './toggle-lib.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@NgModule({
  declarations: [ToggleLibComponent, ToggleComponent],
  imports: [
  ],
  exports: [
    ToggleLibComponent,
    ToggleComponent,
  ]
})
export class NextToggleModule { }
