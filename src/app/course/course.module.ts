import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CoursesListComponent, CourseDetailsComponent } from './courses';
import { CourseService } from './course.service';
import { CourseToolboxModule } from './list/toolbox/course-toolbox.module';
import { CoursePreviewComponent } from './list/preview/course-preview.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
