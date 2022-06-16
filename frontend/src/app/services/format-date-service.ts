import {Injectable} from "@angular/core";

@Injectable()
export class FormatDateService {
    formatDate(date: Date): string {
        if(!date){
            return null;
        }
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return year + '-' + this._to2digit(month) + '-' + this._to2digit(day);
        // return year  + '/' + this._to2digit(month) + '/' + this._to2digit(day) ;
    }

    private _to2digit(n: number) {
        return ('00' + n).slice(-2);
    }
}
