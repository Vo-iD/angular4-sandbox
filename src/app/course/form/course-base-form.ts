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

  public updateDuration($event: number): void {
    this.course.duration = $event;
  }

  public updateDate($event: Date): void {
    this.course.date = $event;
  }
}
