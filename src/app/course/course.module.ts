import { NgModule } from '@angular/core';
import { CoursesListComponent, CourseDetailsComponent } from './courses';
import { CourseService } from './course.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CourseDetailsComponent,
    CoursesListComponent
  ],
  declarations: [
    CourseDetailsComponent,
    CoursesListComponent
  ],
  providers: [CourseService]
})
export class CourseModule { }
