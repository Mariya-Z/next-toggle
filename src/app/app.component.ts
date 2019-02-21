import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  disabled = false;
  required = true;
  tabIndex = 1;
  checked = true;
  isChecked = false;
  reactiveForm = new FormGroup({
    toggleFormControl: new FormControl({ checked: true})
  });


}
