## Toggle size

Toggle size depends on font size, developer shouldn't change it manually

### Tempalte for this example looks like code below
```
<div class='container'>
    <next-toggle class="small"
        [disabled]="false"
        [required]="true"
        [tabIndex]="'1'"
        [externalId]="'1'"
    ></next-toggle>
    <label for='1' class="small">Small</label>
</div>
<div class='container'>
    <next-toggle class="medium"
        [disabled]="false"
        [required]="true"
        [tabIndex]="'1'"
        [externalId]="'2'"
    ></next-toggle>
    <label for='2' class="medium">Medium</label>
</div>
<div class='container'>
    <next-toggle class="big"
        [disabled]="false"
        [required]="true"
        [tabIndex]="'1'"
        [externalId]="'3'"
    ></next-toggle>
    <label for='3' class="big">Big</label>
</div>
```