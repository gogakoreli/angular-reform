import { Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export abstract class ValueAccessorBase implements ControlValueAccessor {
  private _value: any;
  public get value(): any {
    return this._value;
  }

  private onChange: (value: any) => {};

  protected onTouched: () => {};

  @Input() disabled = false;

  public updateAndNotify(obj: any): void {
    this.writeValue(obj);
    this.notifyValueChange();
  }

  private notifyValueChange() {
    if (this.onChange) {
      this.onChange(this._value);
    }
  }

  public writeValue(obj: any): void {
    this._value = obj;
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
