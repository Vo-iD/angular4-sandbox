import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from '../models/course';
import { CourseService } from '../course.service';
import { CourseBaseForm } from './course-base-form';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'edit-course',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class EditCourseComponent extends CourseBaseForm implements OnInit, OnDestroy {
  public courseId: string;

  constructor(route: ActivatedRoute, private _courseService: CourseService, router: Router) {
    super(router);

    this.submitButtonTitle = 'Save';
    route.params.subscribe((params: Params) => {
      this.courseId = params['id'];
    });
  }

  public ngOnInit(): void {
    this._courseService.get(this.courseId)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((course) => {
        this.course = course;
      });
  }

  public save(): void {
    this._courseService.update(this.courseId, this.course)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['courses']);
        }
      });
  }
}
