## Required toggle

If toggle is necessary / toggle has to be checked, you have to pass true for required

### Tempalte for this example looks like code below
```
<style>
  .container {
    display: flex;
    flex-direction: column;
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
<form class="container" ngNativeValidate>
    <div class="container__row">
        <next-toggle
            [disabled]="flase"
            [required]="true"
            [tabIndex]="'1'"
            [externalId]="'1'"
            [(ngModel)]="isChecked"
            name="toggle"
        ></next-toggle>
        <label for="1" class="checkbox-layout">Required</label>
        <input type="submit">
    </div>
</form>
```
