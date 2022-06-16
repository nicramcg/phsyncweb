import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class FileUploadService {
    constructor(private httpClient: HttpClient,
                private cookieService: CookieService) {
    }

    uploadFile(fileToUpload: File, url): any {
        let xsrf = this.cookieService.get('XSRF-TOKEN');
        const httpOptions = {
            headers: new HttpHeaders({
                'XSRF-TOKEN': xsrf,
            })
        };
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return this.httpClient.post<any>(url, formData, httpOptions);
    }
}
