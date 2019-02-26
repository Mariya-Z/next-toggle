## Toggle size

Toggle size depends on font size, developer should change just font size, toggle size will be changed automatically

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
  .small {
      font-size: 10px;
  }
  .medium {
    font-size: 16px;
  }
  .big {
    font-size: 26px;
  }
</style>

<form class="container">
    <div class="container__row">
        <next-toggle class="small"
            [disabled]="false"
            [required]="true"
            [tabIndex]="'3'"
            [externalId]="'1'"
            [(ngModel)]="isFirstChecked"
            name="toggle1"
        ></next-toggle>
        <label for="1" class="small checkbox-layout">Small</label>
    </div>

    <div class="container__row">
        <next-toggle class="medium"
            [disabled]="false"
            [required]="true"
            [tabIndex]="'2'"
            [externalId]="'2'"
            [(ngModel)]="isSecondChecked"
            name="toggle2"
        ></next-toggle>
        <label for="2" class="medium checkbox-layout">Medium</label>
    </div>

    <div class="container__row">
        <next-toggle class="big"
            [disabled]="false"
            [required]="true"
            [tabIndex]="'1'"
            [externalId]="'3'"
            [(ngModel)]="isThirdChecked"
            name="toggle3"
        ></next-toggle>
        <label for="3" class="big checkbox-layout">Big</label>
    </div>
</form>
```