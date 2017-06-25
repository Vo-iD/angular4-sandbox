import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'date-input',
  templateUrl: './date-input.component.html'
})
export class DateInputComponent {
  @Input() public date: Date;
  @Output() public dateChanged: EventEmitter<Date> = new EventEmitter();

  public onChange($event: Date) {
    this.date = $event;
    this.dateChanged.emit($event);
  }
}
