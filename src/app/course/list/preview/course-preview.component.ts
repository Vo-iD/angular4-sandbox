import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.scss']
})
export class CoursePreviewComponent {
  @Input() public course: Course;
  @Output() public deleteCourse = new EventEmitter<string>();

  public editCourse(): void {
    console.log(`Edit course ${this.course.id} clicked`);
  }

  public formatDuration(totalDuration: number): string {
    let duration = '';
    const hours = Math.floor(totalDuration / 60);
    const minutes = totalDuration - hours * 60;

    if (hours > 0) {
      duration += `${hours}h `;
    }

    duration += `${minutes}min`;

    return duration;
  }

  public callDelete(): void {
    this.deleteCourse.emit(this.course.id);
  }
}
