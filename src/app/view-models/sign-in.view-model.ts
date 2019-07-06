import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Injectable()
export class SignInViewModel {

    user: User = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    constructor(private _authService: AuthService) { }

    async signIn(): Promise<string> {
        let accessToken =  await this._authService.signIn(this.user.email, this.user.password);
        this.user = {} as User;
        return accessToken;
    }
}
