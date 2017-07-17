import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'date-input',
  templateUrl: './date-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements ControlValueAccessor {
  public readOnly: boolean;
  public pattern = 'MM/DD/YYYY';
  private _changed = new Array<(value: any) => void>();
  private _onTouchedCallback: () => void = () => {};
  private _innerValue: Date;

  public set value(v: Date) {
    this._innerValue = v;
    this._changed.forEach((f) => f(v));
  }

  public get value(): Date {
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

  public writeValue(value: Date): void {
    this._innerValue = value;
  }

  public onBlur() {
    this._onTouchedCallback();
  }
}
