import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['course-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchComponent {
  public searchTerm: string;

  public find(): void {
    console.log(`Search by term: ${this.searchTerm}`);
  }
}
