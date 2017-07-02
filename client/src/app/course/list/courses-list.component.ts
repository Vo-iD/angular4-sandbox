import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeUntil';

import { ModalWindowService, SafeObservableWrapper } from '../../shared/shared';

import { CourseService } from '../course.service';
import { Course } from '../models/course';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent extends SafeObservableWrapper implements OnInit {
  public courses: Course[];
  public countPerPage = 5;
  public page = 1;

  constructor(
    private _courseService: CourseService,
    private _modalWindowService: ModalWindowService) {
    super();
  }

  public ngOnInit(): void {
    this._init();
  }

  public deleteCourse($event): void {
    this._modalWindowService.openConfirmation('Do you really want to delete this course?')
      .then((result) => {
        if (result) {
          this._courseService.remove($event);
          this._init();
        }
      });
  }

  public loadMoreCourses(): void {
    this.page++;

    this._courseService
      .getList(this.countPerPage, this.page)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((courses) => courses.forEach((c) => this.courses.push(c)));
  }

  private _init(): void {
    this._courseService
      .getList(this.countPerPage, this.page)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((courses) => this.courses = courses);
  }
}
