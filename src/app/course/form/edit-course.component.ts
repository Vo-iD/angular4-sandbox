import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'edit-course',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class EditCourseComponent {
  public courseId: string;

  constructor(router: ActivatedRoute) {
    router.params.subscribe((params: Params) => {
      this.courseId = params['id'];
    });
  }
}
