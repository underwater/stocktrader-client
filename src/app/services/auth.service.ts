import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import * as jwt_decode from 'jwt-decode';
import { Observer, Observable } from 'rxjs';

@Injectable()
export class AuthService {

    /**
     * 2. MVVM Pattern for SignUp and SignIn
     * 3. Write the views
     * 4. Global Error Handler Angular
     */

    private _accessTokenObserver: Observer<string>;
    public accessToken$: Observable<string> = new Observable(observer => {
        this._accessTokenObserver = observer;
    });

    public tokenExpired: Observable<boolean> = new Observable(observer => {
        setInterval(() => {
            if (!this.tokenExpiresAt) {
                observer.next(true);
            }
            else {
                if (this.tokenExpiresAt < new Date()) {
                    observer.next(true);
                }
                else {
                    observer.next(false);
                }
            }
        }, 10000);
    });

    constructor(private _httpClient: HttpClient) { }

    get user(): User {
        return JSON.parse(localStorage.getItem("User"));
    }

    get tokenExpiresAt(): Date {
        return new Date(parseInt(localStorage.getItem("tokenExpiresAt")));
    }

    get accessToken(): string {
        return localStorage.getItem("accessToken");
    }

    set accessToken(value: string) {
        if (!value) {
            localStorage.removeItem("accessToken");
        }
        const decoded = jwt_decode(value);
        if (decoded) {
            localStorage.setItem("user", JSON.stringify(decoded.user));
            let tokenExpiresAt = decoded.exp;
            localStorage.setItem("tokenExpiresAt", tokenExpiresAt);
        }
        localStorage.setItem("accessToken", value);
        this._accessTokenObserver.next(value);
    }


    private _baseUrl: string = `${environment.serverRoot}/api/auth`;
    private _endpoints = {
        singUp: this._baseUrl + "/singup",
        signIn: this._baseUrl + "/signin"
    };

    async signUp(user: User): Promise<string> {
        let accessToken = await this._httpClient.post<string>(this._endpoints.singUp, user).toPromise();
        this.accessToken = accessToken;
        return accessToken;
    }

    async signIn(email: string, password: string): Promise<any> {
        let accessToken = await this._httpClient.post<string>(this._endpoints.signIn, {
            email,
            password
        }).toPromise();
        this.accessToken = accessToken;
        return accessToken;
    }

    logout() {
        this.accessToken = null;
    }
}
