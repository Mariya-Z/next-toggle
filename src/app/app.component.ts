import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public disabled = false;
  public required = true;
  public tabIndex = 1;
  public isChecked = true;
  public reactiveForm = new FormGroup({
    toggleFormControl: new FormControl({value: false, disabled: this.disabled}),
  });
}
