## Project setup
```
npm i next-toggle
```
## Basic usage example

### Add module into your app
```
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NextToggleModule,
  ],
  bootstrap: [AppComponent]
})

```
### Add murkup to the template file

```
<next-toggle></next-toggle>
```

### Toggle has 4 input parametrs
```
  disabled: boolean
  required: boolean
  tabIndex: number
  externalId: string
```
externalId is optional, if you don't pass it, id will be added automatically. In this case it's impossible to add lable for toggle

### For example
```
<div class='container'>
  <next-toggle
      [disabled]="disabled"
      [required]="required"
      [tabIndex]="'1'"
      [externalId]="'1'"
      [(ngModel)]="isChecked"
  ></next-toggle>
  <label for='1'>Label for toggle/label>
</div>
```