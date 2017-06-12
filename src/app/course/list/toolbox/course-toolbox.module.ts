import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../course.service';
import { CourseToolboxComponent } from './course-toolbox.component';
import { CourseSearchComponent } from './search/course-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
