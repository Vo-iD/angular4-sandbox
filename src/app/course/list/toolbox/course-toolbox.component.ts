import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'course-toolbox',
  templateUrl: './course-toolbox.component.html'
})
export class CourseToolboxComponent {
  @Output() public coursesChange: EventEmitter<Course[]> = new EventEmitter(); // todo remove?

  private _courses: Course[];

  @Input()
  public get courses() { return this._courses; }

  public set courses(val) {
    this._courses = val;
    this.coursesChange.emit(this._courses);
  }

  public addCourse() {
    console.log('Add course clicked');
  }
}
