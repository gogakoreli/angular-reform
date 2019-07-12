import {
  Component,
  OnInit,
  HostBinding,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { InputBase } from '../common/input-base';
import { DefaultValueAccessor } from '../common/default-value-accessor';

let nextUniqueId = 0;

@Component({
  selector: 'ref-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DefaultValueAccessor],
})
export class SwitchComponent extends InputBase implements OnInit {
  @Input() label: string;

  private uniqueId: string = `ref-switch-${++nextUniqueId}`;
  @Input() id: string = this.uniqueId;

  public get inputId(): string {
    return `${this.id || this.uniqueId}`;
  }

  @HostBinding('class.custom-control') customControlClass = true;
  @HostBinding('class.custom-switch') customSwitchClass = true;

  ngOnInit() {
    super.ngOnInit();

    this.formGroupClass = false;
  }
}
