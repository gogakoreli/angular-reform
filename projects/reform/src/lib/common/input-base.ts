import { ValueAccessorBase } from './value-accessor-base';
import {
  OnInit,
  OnDestroy,
  AfterViewInit,
  Injector,
  Optional,
  HostBinding,
  Attribute,
} from '@angular/core';
import { NgControl, FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export abstract class InputBase extends ValueAccessorBase
  implements OnInit, OnDestroy, AfterViewInit {
  @HostBinding('class.form-group') formGroupClass = true;

  protected unsubscribe$ = new Subject<boolean>();

  constructor(
    @Attribute('optional') public optional: boolean,
    @Optional() protected injector: Injector,
    @Optional() protected parentFormGroup: FormGroupDirective,
    @Optional() public ngControl: NgControl,
  ) {
    super();
    this.optional = this.optional != undefined;
    if (ngControl) {
      ngControl.valueAccessor = this;
    }

    if (parentFormGroup) {
      parentFormGroup.ngSubmit
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((_) => {
          ngControl.control.markAsTouched();
        });
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngAfterViewInit(): void {}

  public blur() {
    this.onTouched && this.onTouched();
  }
}
