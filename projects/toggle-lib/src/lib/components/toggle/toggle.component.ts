import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'next-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() required: boolean;
  @Input() tabIndex: number;

  constructor() { }

  ngOnInit() {
  }

}
