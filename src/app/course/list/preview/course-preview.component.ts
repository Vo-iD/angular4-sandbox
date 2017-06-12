import { Component, Input } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'course-preview',
  templateUrl: './course-preview.component.html'
})
export class CoursePreviewComponent {
  @Input() public course: Course;
}
