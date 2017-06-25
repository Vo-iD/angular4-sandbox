import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'duration',
  templateUrl: './duration.component.html'
})
export class DurationComponent {
  @Input() public duration: number;
  @Output() public durationChanged: EventEmitter<number> = new EventEmitter();

  public onChange($event: number) {
    this.durationChanged.emit($event);
  }
}
