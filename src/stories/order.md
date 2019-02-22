## Element order

Toggle has input tabIndex parametr that's why it's possible to change elements order on page manually

### Tempalte for this example looks like code below
```
<div class='container'>
    <next-toggle
        [disabled]="false"
        [required]="true"
        [tabIndex]="'3'"
        [externalId]="'1'"
    ></next-toggle>
    <label for='1'>Third</label>
</div>
<div class='container'>
    <next-toggle
        [disabled]="false"
        [required]="true"
        [tabIndex]="'1'"
        [externalId]="'2'"
    ></next-toggle>
    <label for='2'>First</label>
</div>
<div class='container'>
    <next-toggle
        [disabled]="false"
        [required]="true"
        [tabIndex]="'2'"
        [externalId]="'3'"
    ></next-toggle>
    <label for='3'>Second</label>
</div>
```