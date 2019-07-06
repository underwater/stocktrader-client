import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Injectable()
export class SignUpViewModel {

    user: User = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    constructor(private _authService: AuthService) { }

    async signUp(): Promise<string> {
        let accessToken = await this._authService.signUp(this.user);
        return accessToken;
    }
}
