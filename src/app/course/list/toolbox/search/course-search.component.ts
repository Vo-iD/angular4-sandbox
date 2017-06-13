import { Component } from '@angular/core';

@Component({
  selector: 'course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['course-search.component.scss']
})
export class CourseSearchComponent {
  public searchTerm: string;

  public find(): void {
    console.log(`Search by term: ${this.searchTerm}`);
  }
}
