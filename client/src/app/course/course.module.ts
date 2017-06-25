import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import {
  CoursesListComponent,
  CourseDetailsComponent,
  EditCourseComponent,
  AddCourseComponent
} from './courses';
import { CourseService } from './course.service';
import { CourseToolboxModule } from './list/toolbox/course-toolbox.module';
import { CoursePreviewComponent } from './list/preview/course-preview.component';
import { CourseBorderDirective } from './directives/course-border.directive';
import { DurationComponent } from './form/duration/duration.component';
import { DateInputComponent } from './form/date/date-input.component';
import { AuthorsComponent } from './form/authors/authors.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule.forRoot(),
    CourseToolboxModule
  ],
  exports: [
    CourseDetailsComponent,
    CoursesListComponent,
    EditCourseComponent,
    AddCourseComponent
  ],
  declarations: [
    CourseDetailsComponent,
    CoursesListComponent,
    EditCourseComponent,
    AddCourseComponent,

    CourseBorderDirective,
    CoursePreviewComponent,
    DateInputComponent,
    AuthorsComponent,
    DurationComponent
  ],
  providers: [CourseService]
})
export class CourseModule { }
