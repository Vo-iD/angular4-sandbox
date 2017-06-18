import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from '../models/course';
import { CourseService } from '../course.service';
import { CourseBaseForm } from './course-base-form';

@Component({
  selector: 'add-course',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class AddCourseComponent extends CourseBaseForm {
  constructor(private _courseService: CourseService, router: Router) {
    super(router);
    this.course = {} as Course;
    this.submitButtonTitle = 'Create';
  }

  public save(): void {
    this._courseService.create(this.course);
    this.router.navigate(['courses']);
  }
}
