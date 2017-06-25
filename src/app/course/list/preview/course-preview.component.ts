import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePreviewComponent {
  @Input() public course: Course;
  @Output() public deleteCourse = new EventEmitter<string>();

  public editCourse(): void {
    console.log(`Edit course ${this.course.id} clicked`);
  }

  public callDelete(): void {
    this.deleteCourse.emit(this.course.id);
  }
}
