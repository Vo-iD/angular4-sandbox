import { NgModule } from '@angular/core';

import { CourseService } from '../../course.service';
import { CommonModule } from '@angular/common';
import { CourseToolboxComponent } from './course-toolbox.component';
import { CourseSearchComponent } from './search/course-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CourseToolboxComponent
  ],
  declarations: [
    CourseToolboxComponent,
    CourseSearchComponent
  ],
  providers: [CourseService]
})
export class CourseToolboxModule { }
