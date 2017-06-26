import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Course } from '../../../models/course';
import { CourseService } from '../../../course.service';
import { SafeObservableWrapper } from "../../../../shared/shared";

@Component({
  selector: 'course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['course-search.component.scss']
})
export class CourseSearchComponent extends SafeObservableWrapper {
  public searchTerm: string;
  @Output() public coursesChange: EventEmitter<Course[]> = new EventEmitter();

  private _courses: Course[];

  @Input()
  public get courses() { return this._courses; }

  public set courses(val) {
    this._courses = val;
    this.coursesChange.emit(this._courses);
  }

  constructor(private _courseService: CourseService) {
    super();
  }

  public find(): void {
    this._courseService.search(this.searchTerm)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((courses) => {
        this.courses = courses;
      });
  }
}
