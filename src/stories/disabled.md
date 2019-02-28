## Disabled toggle

If user shouldn't have possibility to change toggle mode, you have to pass true for disabled

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
<form class="container">
    <div class="container__row">
        <next-toggle
            [disabled]="false"
            id="1"
            [(ngModel)]="isFirstChecked"
            name="toggle1"
        ></next-toggle>
        <label for="1">Active on</label>
    </div>
    <div class="container__row">
        <next-toggle
            [disabled]="false"
            id="2"
            [(ngModel)]="isFirstUnChecked"
            name="toggle2"
        ></next-toggle>
        <label for="2">Active off</label>
    </div>
    <div class="container__row">
        <next-toggle
            [disabled]="true"
            id="3"
            [(ngModel)]="isThirdUnChecked"
            name="toggle3"
        ></next-toggle>
        <label for="3">Disabled off</label>
    </div>
    <div class="container__row">
        <next-toggle
            [disabled]="true"
            id="3"
            [(ngModel)]="isThirdChecked"
            name="toggle4"
        ></next-toggle>
        <label for="3">Disabled on</label>
    </div>
</form>
```