import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'duration',
  templateUrl: './duration.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    }
  ]
})
export class DurationComponent implements ControlValueAccessor {
  public readOnly: boolean;
  private _innerValue: number;
  private _changed = new Array<(value: any) => void>();
  private _onTouchedCallback: () => void = () => {};

  public set value(v: number) {
    this._innerValue = v;
    this._changed.forEach((f) => f(v));
  }

  public get value(): number {
    return this._innerValue;
  };

  public registerOnChange(fn: any): void {
    this._changed.push(fn);
  }

  public registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.readOnly = isDisabled;
  }

  public writeValue(value: number): void {
    this._innerValue = value;
  }

    public onBlur() {
    this._onTouchedCallback();
  }
}
