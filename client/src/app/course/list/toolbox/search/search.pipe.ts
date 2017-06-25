import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../models/course';

@Pipe({
  name: 'searchCourse'
})
export class SearchCoursePipe implements PipeTransform {

  public transform(items: Course[], searchTerm: string): Course[] {
    const filtered = items.filter((item) =>
      item.title.toUpperCase().includes(searchTerm.toUpperCase())
        || item.description.toUpperCase().includes(searchTerm.toUpperCase()));

    return filtered;
  }
}
