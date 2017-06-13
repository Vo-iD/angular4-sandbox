import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../course.service';
import { CourseToolboxComponent } from './course-toolbox.component';
import { CourseSearchComponent } from './search/course-search.component';
import { SearchCoursePipe } from './search/search.pipe';

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
  providers: [CourseService, SearchCoursePipe]
})
export class CourseToolboxModule { }
