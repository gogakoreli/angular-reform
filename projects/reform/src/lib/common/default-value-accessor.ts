import { Injectable } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Injectable()
export class DefaultValueAccessor implements ControlValueAccessor {
  public disabled = false;

  private _value: any;
  public get value(): any {
    return this._value;
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};

  public updateAndNotify(value: any): void {
    this.writeValue(value);
    this.notifyValueChange();
  }

  private notifyValueChange() {
    if (this.onChange) {
      this.onChange(this._value);
    }
  }

  public touch() {
    this.onTouched();
  }

  public writeValue(value: any): void {
    this._value = value;
  }

  public registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
