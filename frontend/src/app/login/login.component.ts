import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/services/auth-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppUserService} from '../services/app-user.service';
import {AuthorityUtils} from '../shared/authority-utils';

@Component({
    selector: 'app-login',
    templateUrl: './login-new.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    alert = '';
    showAlert = false;
    errorMessage;
    passwordHide = true;
    redirectUrlToIdeaDetails = null;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private authService: AuthService,
                private formBuilder: FormBuilder,
                private appUserService: AppUserService) {
    }

    ngOnInit() {
        const ideaUrl = sessionStorage.getItem('TEMP_IDEA_URL');
        if (ideaUrl && ideaUrl.indexOf('idea') !== -1) {
            const startIdx = ideaUrl.lastIndexOf('#') + 1;
            this.redirectUrlToIdeaDetails = ideaUrl.substring(startIdx);
        } else {
            this.redirectUrlToIdeaDetails = null;
        }
        this.loginForm = this.buildForm();
        sessionStorage.removeItem('isLoggedin');
        sessionStorage.removeItem('currentUser');
    }

    buildForm() {
        return this.formBuilder.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    checkValidity(password: string, username: string) {
        return (group: FormGroup) => {
            const passwordInput = group.controls[password],
                usernameInput = group.controls[username];
            if (this.showAlert) {
                this.showAlert = false;
                passwordInput.setErrors(null);
                usernameInput.setErrors(null);
                return null;
            }
        };
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        this.login();
    }

    login() {
        let rawValue = this.loginForm.getRawValue();
        this.authService.logIn(rawValue)
            .subscribe(data => {
                if (data) {
                    sessionStorage.setItem('currentUser', JSON.stringify(data));
                    const currentUser = this.appUserService.getCurrentUserFromSession();
                    if (AuthorityUtils.isAccessToApp(currentUser)) {
                        sessionStorage.setItem('isLoggedin', 'true');
                        this.router.navigate(['/home']);
                    } else {
                        sessionStorage.removeItem('currentUser');
                        sessionStorage.removeItem('isLoggedin');
                        localStorage.removeItem('currentLanguage');
                    }
                } else {
                    sessionStorage.removeItem('currentUser');
                    sessionStorage.removeItem('isLoggedin');
                    localStorage.removeItem('currentLanguage');
                }
            }, err => {
                sessionStorage.removeItem('currentUser');
                localStorage.removeItem('currentLanguage');
            });
    }
}
