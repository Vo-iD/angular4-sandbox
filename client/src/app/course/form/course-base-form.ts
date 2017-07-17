import { Course } from '../models/course';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { OnDestroy } from '@angular/core';
import { SafeObservableWrapper } from '../../shared/shared';

export abstract class CourseBaseForm extends SafeObservableWrapper {
  public course: Course;
  public submitButtonTitle: string;

  constructor(protected router: Router) {
    super();
    this.course = {} as Course;
  }

  public abstract save(): void;

  public cancel(): void {
    this.router.navigate(['courses']);
  }
}
