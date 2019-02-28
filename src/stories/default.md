## Project setup
```
npm i next-toggle
```
### Toggle mode is defined through FormControl element or ngModel binding

### Toggle has 4 input parametrs
```
  disabled: boolean
  required: boolean
  tabIndex: number
  id: string
```
id is optional, if you don't pass it, id will be added automatically. In this case it's impossible to add lable for toggle


## Basic usage example with NgModel

### Add module into your app
```
import { NextToggleModule } from 'toggle-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NextToggleModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

```
### Add code to the component file
```
export class AppComponent {
  ...
  isChecked = true;
}
```
### Add murkup to the template file
```
<form>
    <next-toggle
        [disabled]="false"
        [required]="true"
        [tabIndex]="'1'"
        [id]="'1'"
        [(ngModel)]="isChecked"
        name="toggle"
    ></next-toggle>
    <label for="1">Label for toggle</label>
</form>
```

## Basic usage example with ReactiveForms

### Add module into your app
```
import { NextToggleModule } from 'toggle-lib';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NextToggleModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```
### Add code to the component file
```
export class AppComponent {
  ...
  reactiveForm = new FormGroup({
    toggleFormControl: new FormControl( false )
  });
}
```
### Add murkup to the template file
```
<form [formGroup]="reactiveForm">
    <next-toggle
        [disabled]="false"
        [required]="true"
        [tabIndex]="'1'"
        [id]="'0'"
        formControlName="toggleFormControl"
    ></next-toggle>
    <label for="0">reactive form</label>
</form>
```


### Template for this example looks like code below
```
<style>
  .container {
    display: flex;
    flex-direction: column;
    font-size: 30px;
  }
  .checkbox-layout {
    position: relative;
    color: #9D9D9D;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
  }
  .container__row {
    display: flex;
    flex-direction: row;
  }
</style>
<form class="container">
    <div class="container__row">
        <next-toggle
            [disabled]="false"
            [required]="true"
            [tabIndex]="'1'"
            [id]="'1'"
            [(ngModel)]="isChecked"
            name="toggle"
        ></next-toggle>
        <label for="1" class="checkbox-layout">Label for toggle</label>
    </div>
</form>
```