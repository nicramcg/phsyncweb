import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppUserService {

    constructor(private httpClient: HttpClient) {
    }

    getCurrentUserFromSession() {
        return JSON.parse(sessionStorage.getItem('currentUser'));
    }

    updateLang(lang: string) {
        return this.httpClient.get<any>(`/api/lang/for/user/set/${lang}`);
    }

    hasAdminOrAccountingGroup() {

    }
}
