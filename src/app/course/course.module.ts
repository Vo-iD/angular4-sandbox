import { NgModule } from '@angular/core';
import { CoursesListComponent, CourseDetailsComponent } from './courses';
import { CourseService } from './course.service';
import { CommonModule } from '@angular/common';
import { CourseControlsModule } from './list/controls/course-controls.module';
import { CoursePreviewComponent } from './list/preview/course-preview.component';

@NgModule({
  imports: [
    CommonModule,
    CourseControlsModule
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
