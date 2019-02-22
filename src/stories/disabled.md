## Disabled toggle

If user shouldn't have possibilty to changle toggle mode, you have to pass true for disabled

### Tempalte for this example looks like code below
```
<div class='container'>
    <next-toggle
        [disabled]="true"
        [required]="true"
        [tabIndex]="'1'"
        [externalId]="'1'"
    ></next-toggle>
    <label for='1'>Disabled</label>
</div>
```