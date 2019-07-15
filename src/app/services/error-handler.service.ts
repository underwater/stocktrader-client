import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

import { AccessDeniedError } from '../errors/access-denied.error';
import { NotFoundError } from '../errors/not-found.error';
import { AuthenticationError } from '../errors/authentication.error';

//Browser Error Handler
        //Angular Error Handler
            //Override the default Angular Error Handler

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

    constructor(private injector: Injector,
                private authService: AuthService,
                private zone: NgZone) {
        window.onunhandledrejection = error => {
            console.log("Promise rejection event: ", error);
        }
    }

    async handleError(error: any) {
        error = error.rejection ? error.rejection : error;
        console.error(error);
        if (error instanceof AuthenticationError || (error.type && error.type === "AuthenticationError")) {
            await this.authenticationErrorHandler(error);
        }
        else if (error instanceof AccessDeniedError || (error.type && error.type === "AccessDeniedError")) {
            await this.accessDeniedErrorHandler(error);
        }
        else if (error instanceof NotFoundError || (error.type && error.type === "NotFoundError")) {
            await this.notFoundErrorHandler(error);
        }
        else {
            this.genericErrorHandler(error);
        }
    }

    async authenticationErrorHandler(error: AuthenticationError) {
        // zone.run() insures that passed function runs within Angular's change tracking
        await this.zone.run(async () => {
            this.authService.logout();
            await this.navigate(['auth', 'login']);
            this.displayError("danger", error.message, "Autnentication Error");
        });
    }

    async accessDeniedErrorHandler(error: AccessDeniedError) {
        await this.zone.run(async () => {
            await this.navigate(['']);
            this.displayError("danger", error.message, "Access Denied");
        });
    }

    async notFoundErrorHandler(error: NotFoundError) {
        await this.zone.run(async () => {
            await this.navigate(['pages', 'not-found']);
        });
    }

    genericErrorHandler(error: Error) {
        this.zone.run(() => {
            this.displayError("danger", "Oops! Something went wrong. Please try again later or contact administrator", "Unknown Error");
        });
    }

    private displayError(level: string, message: string, title: string, duration: number = 5000) {
        let toastrService = this.injector.get(NbToastrService);
        toastrService[level](message, title, {duration});
    }

    private async navigate(routeSegments: string[]){
        await this.zone.run(async () => await this.injector.get(Router).navigate(routeSegments));
    }
}
