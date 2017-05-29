import { NgModule } from '@angular/core';
import { CourseDetailsComponent } from './details/course-details.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

@NgModule({
  exports: [
    CourseDetailsComponent,
    CoursesListComponent
  ],
  declarations: [
    CourseDetailsComponent,
    CoursesListComponent
  ]
})
export class CourseModule { }

export {
  CourseDetailsComponent,
  CoursesListComponent
}
