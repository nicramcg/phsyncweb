import {Injectable} from "@angular/core";
import {SearchConfig} from "../model/search-config";
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {ProgressFile} from "../model/progress-file";

@Injectable()
export class FilesListService {
    constructor(private httpClient: HttpClient) {
    }

    getFilesListForCurrentUser(page, size, sort, dir,
                                    searchSettings: SearchConfig): Observable<ProgressFile[]> {
        if (!sort) {
            sort = 'category';
        }
        if (!dir) {
            dir = 'asc';
        }
        const url = `/api/list/get/current-user`;
        const sortedBy = [sort, dir];
        let params = new HttpParams()
            .set('page', page)
            .set('size', size)
            .set('sort', sortedBy.join(','));
        if (searchSettings && searchSettings.searchTerm) {
            return this.httpClient.post(url, searchSettings, {
                params: params
            }).pipe(
                catchError(error => {
                    return throwError(error);
                }),
                map(res => res as ProgressFile[]
                )
            );
        } else {
            return this.httpClient.get(url, {
                params: params
            }).pipe(
                catchError(error => {
                    return throwError(error);
                }),
                map(res => res as ProgressFile[]
                )
            );
        }
    }
}
