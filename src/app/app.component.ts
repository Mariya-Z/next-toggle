import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toggle-lib-app';
  disabled = false;
  labelPosition = 'after';
  required = true;
  tabIndex;
}
