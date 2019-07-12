import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBase } from '../common/input-base';
import { DefaultValueAccessor } from '../common/default-value-accessor';

let nextUniqueId = 0;

@Component({
  selector: 'ref-radiogroup',
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DefaultValueAccessor],
})
export class RadiogroupComponent extends InputBase implements OnInit {
  public listData$ = new BehaviorSubject<any[]>([]);
  @Input() set data(value: any[]) {
    this.listData$.next(value || []);
  }

  @Input() inline: boolean = false;
  @Input() displayMember: string;
  @Input() valueMember: string;

  private uniqueId: string = `ref-radiogroup-${++nextUniqueId}`;
  @Input() id: string = this.uniqueId;

  public get inputId(): string {
    return `${this.id || this.uniqueId}`;
  }

  public inputIds: string[] = [];

  ngOnInit() {
    super.ngOnInit();

    this.listData$.pipe(takeUntil(this.unsubscribe$)).subscribe((listData) => {
      if (this.value == null) {
        const firstItem = listData && listData.length > 0 && listData[0];
        this.change(firstItem);
      }

      this.inputIds = listData.map((_, index) => `${this.uniqueId}-${index}`);
    });
  }

  public change(item: any) {
    const value = this.getValue(item);
    this.updateAndNotify(value);
  }

  public getValue = (item: any) => getValue(item, this.valueMember);

  public getDisplay = (item: any) => getDisplay(item, this.displayMember);
}

function getDisplay(item: any, displayMember: string): string {
  let result = item;
  if (item && displayMember && item[displayMember] !== undefined) {
    result = item[displayMember];
  }
  return String(result);
}

function getValue(item: any, valueMember: string): any {
  let result = item;
  if (item && valueMember && item[valueMember] !== undefined) {
    result = item[valueMember];
  }
  return result;
}
