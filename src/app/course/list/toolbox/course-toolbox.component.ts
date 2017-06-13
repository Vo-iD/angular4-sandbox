import { Component } from '@angular/core';

@Component({
  selector: 'course-toolbox',
  templateUrl: './course-toolbox.component.html'
})
export class CourseToolboxComponent {

  public addCourse() {
    console.log('Add course clicked');
  }
}
