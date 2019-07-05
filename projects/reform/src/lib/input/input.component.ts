import { Component, Input } from '@angular/core';
import { InputBase } from '../common/input-base';

@Component({
  selector: 'ref-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends InputBase {
  @Input() label: string;
  @Input() type: string = 'text';
}
