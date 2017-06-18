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

  constructor(
    private _courseService: CourseService,
    private _modalWindowService: ModalWindowService) {
    super();
  }

  public ngOnInit(): void {
    debugger;
    const subscription = this._courseService
      .getList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((courses) => this.courses = courses);
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
