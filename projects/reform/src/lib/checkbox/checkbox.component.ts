import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { InputBase } from '../common/input-base';

let nextUniqueId = 0;

@Component({
  selector: 'ref-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent extends InputBase implements OnInit {
  @Input() label: string;

  private uniqueId: string = `fg-checkbox-${++nextUniqueId}`;
  @Input() id: string = this.uniqueId;

  public get inputId(): string {
    return `${this.id || this.uniqueId}`;
  }

  @HostBinding('class.custom-control') customControlClass = true;
  @HostBinding('class.custom-checkbox') customCheckboxClass = true;

  ngOnInit() {
    super.ngOnInit();

    this.formGroupClass = false;
  }
}
