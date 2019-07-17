import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import * as jwt_decode from 'jwt-decode';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AuthService {

    private _accessTokenObserver: Observer<string>;
    public accessToken$: Observable<string> = Observable.create(observer => {
        this._accessTokenObserver = observer;
    });

    public tokenExpired: Observable<boolean> = Observable.create(observer => {
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

    constructor(private _httpClient: HttpClient) {
        this.accessToken$ = Observable.create(observer => {
            this._accessTokenObserver = observer;
        });
    }

    get user(): User {
        return JSON.parse(localStorage.getItem("user"));
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
            let tokenExpiresAt = decoded.exp;  //1528721821
            localStorage.setItem("tokenExpiresAt", tokenExpiresAt);
        }
        localStorage.setItem("accessToken", value);
        if (this._accessTokenObserver) {
            this._accessTokenObserver.next(value);
        }
    }

    public get isLoggedIn(): boolean {
        return this.accessToken && this.accessToken.length > 0;
    }

    private _baseUrl: string = `${environment.serverRoot}/api/auth`;
    private _endpoints = {
        singUp: this._baseUrl + "/signup",
        signIn: this._baseUrl + "/signin"
    };

    async signUp(user: User): Promise<string> {
        let accessToken = await this._httpClient.post(this._endpoints.singUp, user, { responseType: "text" }).toPromise();
        this.accessToken = accessToken;
        return accessToken;
    }

    async signIn(email: string, password: string): Promise<any> {
        let accessToken = await this._httpClient.post(this._endpoints.signIn, {
            email,
            password
        }, {
            responseType: "text"
        }).toPromise();
        this.accessToken = accessToken;
        return accessToken;
    }

    logout() {
        localStorage.clear();
    }
}
