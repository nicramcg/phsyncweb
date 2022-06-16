import {Injectable} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Injectable({
    providedIn: 'root'
})
export class PaginatorHandlerService {

    paginator: PaginatorProps;

    constructor() {
    }

    handlePaginator(
        paginator: MatPaginator, sort: MatSort,
        defaultSortProperty?: string, defaultDir?: string, defaultSize?: number
    ): PaginatorProps {

        const sortProperty = sort && sort.active
            ? sort.active
            : defaultSortProperty
                ? defaultSortProperty
                : 'lastName';
        const dir = sort && sort.direction
            ? sort.direction
            : defaultDir
                ? defaultDir
                : 'asc';
        // sprawdza czy paginator istnieje i czy moze pozostac na stronie na ktorej jest
        // jesli brakuje juz elementow do wyswietlenia na tej stronie to wraca do poprzedniej
        // chyba ze to był ostatni element w tabeli to zostanie na stronie pierwszej
        // ewentualnie powroci do strony pierwszej
        const page = paginator && paginator.pageIndex
            ? (((paginator.length - 1) / paginator.pageIndex) > paginator.pageSize)
                ? paginator.pageIndex
                : paginator.pageIndex - 1 >= 0
                    ? paginator.pageIndex - 1
                    : 0
            : 0;
        const size = paginator && paginator.pageSize
            ? paginator.pageSize
            : defaultSize
                ? defaultSize
                : 10;

        return {
            sortProperty,
            dir,
            page,
            size
        };
    }
}

class PaginatorProps {
    sortProperty: string;
    dir: string;
    page: number;
    size: number;
}
