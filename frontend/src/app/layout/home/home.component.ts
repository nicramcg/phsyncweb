import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SearchConfig} from "../../model/search-config";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FilesListDataSource} from "../../datasources/files-list-data-source";
import {PaginatorHandlerService} from "../../services/paginator-handler.service";
import {FilesListService} from "../../services/files-list-service";
import {merge} from "rxjs";
import {tap} from "rxjs/operators";
import {CurrentUserService} from "../../services/current-user-service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})
export class HomeComponent implements OnInit {
    @ViewChild('paginatorDashboards', {read: MatPaginator}) paginatorDashboards: MatPaginator;
    @ViewChild('sortDashboards', {read: MatSort}) sortDashboards: MatSort;

    filesListDataSource: FilesListDataSource;
    filesListLength: number;
    filesListDisplayedColumns = ['fileName', 'fileNameUuid', 'localDateTime'];
    filesListSearchConfig: SearchConfig = new SearchConfig();
    currentUser: any;
    token: any

    constructor(private paginatorHandler: PaginatorHandlerService,
                private filesListService: FilesListService,
                private currentUserService: CurrentUserService) {
    }

    ngOnInit(): void {
        this.currentUser = this.currentUserService.getCurrentUserFromSession();
        this.currentUserService.getAssignedToken().subscribe(data => {
           this.token = data;
        });
        // tslint:disable-next-line:max-line-length
        this.filesListDataSource = new FilesListDataSource(this.filesListService);
        this.filesListDataSource.loadFilesListForCurrentUser(0, 30, 'id',
            'desc', null);
        this.filesListLength = this.filesListDataSource.subject.getValue().length;
    }

    ngAfterViewInit() {
        this.sortDashboards.sortChange.subscribe(() => this.paginatorDashboards.pageIndex = 0);
        merge(this.sortDashboards.sortChange, this.paginatorDashboards.page)
            .pipe(
                tap(() => this.loadFilesListPage())
            )
            .subscribe();
    }



    loadFilesListPage() {
        this.filesListDataSource.loadFilesListForCurrentUser(
            this.paginatorDashboards.pageIndex,
            this.paginatorDashboards.pageSize,
            this.sortDashboards.active,
            this.sortDashboards.direction,
            this.filesListSearchConfig,
        );
    }
}
