import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'required-validation-message',
  template: `
  <div class="alert alert-danger">
    Field '{{fieldName}}' is required.
  </div>
  `
})
export class RequiredValidationMessageComponent {
  @Input() public fieldName: string;
}
