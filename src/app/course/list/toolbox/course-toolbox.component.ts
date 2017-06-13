import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'course-toolbox',
  templateUrl: './course-toolbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseToolboxComponent {

  public addCourse() {
    console.log('Add course clicked');
  }
}
