import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignInViewModel } from '../../view-models/sign-in.view-model';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    hasError: boolean = false;
    errors: string[] = [];

    get emailControl(): FormControl {
        return this.form.get('email') as FormControl;
    }

    get passwordControl(): FormControl {
        return this.form.get('password') as FormControl;
    }

    form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)])
    });

    constructor(public vm: SignInViewModel, private _router: Router) {
    }

    ngOnInit() {

        this.emailControl.valueChanges.
    }

    async submit() {
        this.hasError = false;
        if (this.form.valid) {
            let email = this.emailControl.value;
            let password = this.passwordControl.value;

            this.vm.user = email;
            this.vm.user = password;
            await this.vm.signIn();
            this._router.navigate(['pages', 'dashboard'])
        }
        else {
            this.hasError = true;
        }
    }
}
