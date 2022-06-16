import {BehaviorSubject, Observable, of} from 'rxjs';
import {CollectionViewer} from '@angular/cdk/collections';
import {catchError, finalize} from 'rxjs/operators';
import {FilesListService} from "../services/files-list-service";
import {ProgressFile} from "../model/progress-file";

export class FilesListDataSource {
    total: number;
    subject = new BehaviorSubject<ProgressFile[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();


    constructor(private filesListService: FilesListService) {
    }

    connect(collectionViewer: CollectionViewer): Observable<ProgressFile[]> {
        return this.subject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.subject.complete();
        this.loadingSubject.complete();
    }

    loadFilesListForCurrentUser(page, size, sort, dir, searchSetting) {

        this.loadingSubject.next(true);

        this.filesListService.getFilesListForCurrentUser(page, size, sort, dir, searchSetting).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(configuration => {

                this.subject.next(configuration['content']);
                this.total = configuration['totalElements'];
            });
    }

}
