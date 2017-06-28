import { Course } from '../models/course';
import { Router } from '@angular/router';

export abstract class CourseBaseForm {
  public course: Course;
  public submitButtonTitle: string;

  constructor(protected router: Router) {
  }

  public abstract save(): void;

  public cancel(): void {
    this.router.navigate(['courses']);
  }
}
