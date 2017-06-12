import { NgModule } from '@angular/core';

import { CourseService } from '../../course.service';
import { CommonModule } from '@angular/common';
import { CourseControlsComponent } from './course-controls.component';
import { CourseSearchComponent } from './course-search/course-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CourseControlsComponent
  ],
  declarations: [
    CourseControlsComponent,
    CourseSearchComponent
  ],
  providers: [CourseService]
})
export class CourseControlsModule { }
