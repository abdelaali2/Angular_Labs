import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFromArray',
})
export class FilterFromArrayPipe implements PipeTransform {
  transform(sourceArray: string[], ...args: string[]): string[] {
    if (!sourceArray.length) {
      return [];
    }
    if (!args.length) {
      return sourceArray;
    }
    let result: string[] = [];
    args.forEach((arg) => {
      let searchText: string = arg.toLowerCase();
      result.push(
        ...sourceArray.filter((item) => item.toLowerCase().includes(searchText))
      );
    });
    return result;
  }
}
