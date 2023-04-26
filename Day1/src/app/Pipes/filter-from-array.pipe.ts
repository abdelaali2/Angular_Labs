import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFromArray',
})
export class FilterFromArrayPipe implements PipeTransform {
  transform(word: string, sourceArray: string[]): string[] {
    if (!sourceArray.length) {
      return [];
    }
    if (!word) {
      return sourceArray;
    }
    let result: string[] = [];
    let searchText: string = word.toLowerCase();
    result.push(
      ...sourceArray.filter((item) => item.toLowerCase().includes(searchText))
    );
    return result;
  }
}
