import { Component, OnInit } from '@angular/core';

import { ModalWindowService } from '../../shared/shared';

import { CourseService } from '../course.service';
import { Course } from '../models/course';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses: Course[];

  constructor(
    private _courseService: CourseService,
    private _modalWindowService: ModalWindowService) {

  }

  public ngOnInit(): void {
    this.courses = this._courseService.getList();
  }

  public deleteCourse($event) {
    this._modalWindowService.openConfirmation('Do you really want to delete this course?')
      .then((result) => {
        if (result) {
          this._courseService.remove($event);
        }
      });
  }
}
