import { ElementRef, Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[course-border]'
})
export class CourseBorderDirective implements OnInit {
  @Input('course-border') public creatingDate: Date;

  constructor(private _element: ElementRef) {
  }

  public ngOnInit(): void {
    const currentDate = new Date();
    let freshDate = new Date();
    freshDate.setDate(currentDate.getDate() - 14);
    if (this.creatingDate < currentDate && this.creatingDate > freshDate) {
      this._element.nativeElement.className += ' fresh-course';
    }

    if (this.creatingDate > currentDate) {
      this._element.nativeElement.className += ' future-course';
    }
  }
}
