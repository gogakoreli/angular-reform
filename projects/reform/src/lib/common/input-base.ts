import {
  OnInit,
  OnDestroy,
  Injector,
  Optional,
  HostBinding,
  Attribute,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { NgControl, FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DefaultValueAccessor } from './default-value-accessor';

export abstract class InputBase implements OnInit, OnDestroy {
  public get disabled() {
    return this.valueAccessor.disabled;
  }

  @Input() public set disabled(value: boolean) {
    this.valueAccessor.setDisabledState(value);
  }

  public get value() {
    return this.valueAccessor.value;
  }

  protected unsubscribe$ = new Subject();

  constructor(
    @Attribute('optional') public optional: boolean,
    @Optional() protected injector: Injector,
    @Optional() protected parentFormGroup: FormGroupDirective,
    @Optional() public ngControl: NgControl,
    @Optional() private cd: ChangeDetectorRef,
    private valueAccessor: DefaultValueAccessor,
  ) {
    this.optional = this.optional != undefined;
    if (ngControl) {
      ngControl.valueAccessor = this.valueAccessor;
    }

    if (parentFormGroup) {
      parentFormGroup.ngSubmit
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((_) => {
          if (!this.disabled) {
            ngControl.control.markAsTouched();
            if (this.cd) {
              this.cd.markForCheck();
            }
          }
        });
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public updateAndNotify(value: any) {
    this.valueAccessor.updateAndNotify(value);
  }

  public blur() {
    this.valueAccessor.touch();
  }
}
