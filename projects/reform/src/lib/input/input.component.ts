import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { InputBase } from '../common/input-base';
import { DefaultValueAccessor } from '../common/default-value-accessor';

let nextUniqueId = 0;

@Component({
  selector: 'ref-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DefaultValueAccessor],
})
export class InputComponent extends InputBase {
  @Input() label: string;
  @Input() type: string = 'text';

  private uniqueId: string = `ref-input-${++nextUniqueId}`;
  @Input() id: string = this.uniqueId;

  public get inputId(): string {
    return `${this.id || this.uniqueId}`;
  }
}
