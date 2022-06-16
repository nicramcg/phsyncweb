import {Pipe, PipeTransform} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: "sortTranslated",
  pure: false
})
export class ArraySortTranslatedPipe  implements PipeTransform {

  constructor(private translate: TranslateService) {
  }

  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array = array.sort((a, b) => this.translateProp(a[field]).localeCompare(this.translateProp(b[field])));
    return array;
  }

  translateProp(name) : string {
    let result: string = name;
    this.translate.get(name).subscribe(
      value => {
        result = value;
      }
    );
    return result;
  }
}
