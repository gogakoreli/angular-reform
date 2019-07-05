import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { InputBase } from '../common/input-base';

let nextUniqueId = 0;

@Component({
  selector: 'ref-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends InputBase implements OnInit {
  @Input() label: string;
  @Input() placeholder: string = '---';
  @Input() data: any[];
  @Input() valueMember: string;
  @Input() displayMember: string;

  private uniqueId: string = `ref-select-${++nextUniqueId}`;
  @Input() id: string = this.uniqueId;

  public get inputId(): string {
    return `${this.id || this.uniqueId}`;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public toDisplay(item: any) {
    return item && (!!this.displayMember ? item[this.displayMember] : item);
  }

  public toValue(item: any) {
    return item && (!!this.valueMember ? item[this.valueMember] : item);
  }
}
