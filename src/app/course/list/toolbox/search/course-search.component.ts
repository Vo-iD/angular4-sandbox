import { Component, Input, EventEmitter, Output } from '@angular/core';

import { SearchCoursePipe } from './search.pipe';

import { Course } from '../../../models/course';

@Component({
  selector: 'course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['course-search.component.scss']
})
export class CourseSearchComponent {
  public searchTerm: string;
  @Output() public coursesChange: EventEmitter<Course[]> = new EventEmitter();

  private _allCourses: Course[];
  private _courses: Course[];

  @Input()
  public get courses() { return this._courses; }

  public set courses(val) {
    if (!this._allCourses) {
      this._allCourses = val;
    }

    this._courses = val;
    this.coursesChange.emit(this._courses);
  }

  constructor(private _searchPipe: SearchCoursePipe) {
  }

  public find(): void {
    this.courses = this._searchPipe.transform(this._allCourses, this.searchTerm);
  }
}
