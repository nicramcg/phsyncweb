import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'timeTrim'})
export class TimeTrimPipe implements PipeTransform{
    transform(val) {
        if (typeof val === 'string' && val.split(":").length === 3) {
            return val.substring(0, val.length - 3);
        } else {
            return val
        }
    }
}
