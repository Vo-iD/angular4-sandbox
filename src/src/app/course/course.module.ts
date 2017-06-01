import { NgModule } from '@angular/core';
import { CoursesListComponent, CourseDetailsComponent } from './courses';

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
