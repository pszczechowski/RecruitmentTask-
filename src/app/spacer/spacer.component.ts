import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spacer',
  template: `<div style="width: 100%; margin: {{ space }}px;"></div>`,
})
export class SpacerComponent {
  @Input() space = '45'; // space between top and bottom of the spacer
}