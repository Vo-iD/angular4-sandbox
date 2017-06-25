import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  public transform(items: any[], orderFieldName: string): any[] {
    return items.sort((first, second) => first[orderFieldName] > second[orderFieldName] ? -1 : 1);
  }
}
