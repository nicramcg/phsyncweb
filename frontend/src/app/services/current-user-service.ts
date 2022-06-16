import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CurrentUserService {
    constructor(private httpClient: HttpClient) {
    }

    getCurrentUserFromSession(): any {
        return JSON.parse(sessionStorage.getItem('currentUser'));
    }

    getAssignedToken() {
        return this.httpClient.get<any>(`/api/app-user/my-token`);
    }
}
