import {PagingSortingRequest} from "../model/paging-sorting-request";
import {Subscription} from "rxjs";
import {DataSource} from "@angular/cdk/collections";

export interface BasicDataSource<T> extends DataSource<T> {
  getSubjectValue(): T[];
  getTotal(): number;
  loadPage(pageable: PagingSortingRequest, args?: any): Subscription;
  load(page: number, size: number, sort: string, direction: string, args?: any): Subscription;
}
