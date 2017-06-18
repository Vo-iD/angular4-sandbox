import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CoursesListComponent, CourseDetailsComponent, EditCourseComponent } from './courses';
import { CourseService } from './course.service';
import { CourseToolboxModule } from './list/toolbox/course-toolbox.module';
import { CoursePreviewComponent } from './list/preview/course-preview.component';
import { CourseBorderDirective } from './directives/course-border.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule.forRoot(),
    CourseToolboxModule
  ],
  exports: [
    CourseDetailsComponent,
    CoursesListComponent,
    EditCourseComponent
  ],
  declarations: [
    CourseBorderDirective,
    CourseDetailsComponent,
    CoursesListComponent,
    CoursePreviewComponent,
    EditCourseComponent
  ],
  providers: [CourseService]
})
export class CourseModule { }
