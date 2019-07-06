import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {

    /**
     * 1. Finish the service.
     * 2. MVVM Pattern for SignUp and SignIn
     * 3. Write the views
     */

    constructor(private _httpClient: HttpClient) { }

    get user(): User {
        return JSON.parse(localStorage.getItem("User"));
    }

    get tokenExpiresAt(): Date {
        return new Date(localStorage.getItem("tokenExpiresAt"));
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
    }


    private _baseUrl: string = `${environment.serverRoot}/api/auth`;
    private _endpoints = {
        singUp: this._baseUrl + "/singup",
        signIn: this._baseUrl + "/signin"
    };

    async signUp(user: User): Promise<string> {
        return this._httpClient.post<string>(this._endpoints.singUp, user).toPromise();
    }

    async signIn(email: string, password: string): Promise<any> {
        return this._httpClient.post<string>(this._endpoints.signIn, {
            email,
            password
        });
    }

    logout() {
        this.accessToken = null;
    }
}
