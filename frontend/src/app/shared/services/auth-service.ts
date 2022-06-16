import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };

    logIn(user: any) {
        const encodedPassword = encodeURIComponent(user.password);
        const data = 'username=' + user.username + '&password=' + encodedPassword;
        return this.httpClient.post('/api/authenticate', data, this.httpOptions);
    }

    logOut(): any {
        // return this.httpClient.post('/api/current/user/logout', null);
        return this.httpClient.post('/api/logout', null);
    }

    getCurrentUser(): any{
        return this.httpClient.get('/api/current/user');
    }

    saveRequestLogin(requestLoginData: any): any {
        // return this.httpClient.post('/api/current/user/logout', null);
        return this.httpClient.post('/api/temp/save/login/request', requestLoginData);
    }
}
