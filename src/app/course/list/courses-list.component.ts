import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../models/course';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  public courses: Course[];

  constructor(private _courseService: CourseService) {

  }

  public ngOnInit(): void {
    this.courses = this._courseService.getList();
  }
}
