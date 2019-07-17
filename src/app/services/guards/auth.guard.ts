import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NbToastrService } from '@nebular/theme';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService, private _router: Router, private _toastrService: NbToastrService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._authService.isLoggedIn) {
            return true;
        }
        else {
            this._toastrService.danger("Authentication Error", "You need to login");
            this._router.navigate(['auth', 'signin']);
            return false;
        }
    }
}
