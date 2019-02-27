import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  disabled = false;
  required = true;
  tabIndex = 1;
  isChecked = true;
  reactiveForm = new FormGroup({
    toggleFormControl: new FormControl({value: false, disabled: this.disabled}),
  });
}
