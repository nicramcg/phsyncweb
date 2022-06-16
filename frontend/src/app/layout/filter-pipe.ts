import {Pipe} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe {

    constructor(private translateService: TranslateService) {
    }

    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(obj => {
            let word = this.translateService.instant(obj.name);
            if (obj.name.toLowerCase().indexOf(searchText) != -1 || word && word.toLowerCase().indexOf(searchText) != -1) {
                return true;
            }
            return false;
            // return obj.name.toLowerCase().includes(searchText);
        });
    }
}
