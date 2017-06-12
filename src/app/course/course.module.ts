import { NgModule } from '@angular/core';
import { CoursesListComponent, CourseDetailsComponent } from './courses';
import { CourseService } from './course.service';
import { CommonModule } from '@angular/common';
import { CourseToolboxModule } from './list/toolbox/course-toolbox.module';
import { CoursePreviewComponent } from './list/preview/course-preview.component';

@NgModule({
  imports: [
    CommonModule,
    CourseToolboxModule
  ],
  exports: [
    CourseDetailsComponent,
    CoursesListComponent
  ],
  declarations: [
    CourseDetailsComponent,
    CoursesListComponent,
    CoursePreviewComponent
  ],
  providers: [CourseService]
})
export class CourseModule { }
