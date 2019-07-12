import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { InputBase } from '../common/input-base';
import { DefaultValueAccessor } from '../common/default-value-accessor';

let nextUniqueId = 0;

@Component({
  selector: 'ref-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DefaultValueAccessor],
})
export class TextareaComponent extends InputBase implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;

  private uniqueId: string = `ref-textarea-${++nextUniqueId}`;
  @Input() id: string = this.uniqueId;

  public get inputId(): string {
    return `${this.id || this.uniqueId}`;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
