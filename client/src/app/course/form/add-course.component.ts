import { Component, OnInit, ViewChild } from '@angular/core';
import { Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../models/course';
import { CourseService } from '../course.service';
import { CourseBaseForm } from './course-base-form';

@Component({
  selector: 'add-course',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class AddCourseComponent extends CourseBaseForm {
    // tslint:disable-next-line:member-access
    @ViewChild('courseForm') form: any;

  constructor(private _courseService: CourseService, router: Router) {
    super(router);
    this.course = new Course();
    this.submitButtonTitle = 'Create';
  }

  public save(): void {
    debugger;
    this._courseService.create(this.course);
    this.router.navigate(['courses']);
  }
}
