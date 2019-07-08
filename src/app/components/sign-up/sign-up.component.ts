import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { SignUpViewModel } from '../../view-models/sign-up.view-model';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-up',
    templateUrl: 'sign-up.component.html'
})
export class SignUpComponent implements OnInit {
    hasError: boolean = false;
    form: FormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)])
    });

    get firstNameInput(): FormControl {
        return this.form.get('firstName') as FormControl;
    }

    get lastNameInput(): FormControl {
        return this.form.get('lastName') as FormControl;
    }

    get emailInput(): FormControl {
        return this.form.get('email') as FormControl;
    }

    get passwordInput(): FormControl {
        return this.form.get('password') as FormControl;
    }

    async submit() {
        this.hasError = false;
        if (this.form.valid) {
            try {
                this.vm.user.firstName = this.firstNameInput.value;
                this.vm.user.lastName = this.lastNameInput.value;
                this.vm.user.email = this.emailInput.value;
                this.vm.user.password = this.passwordInput.value;
                await this.vm.signUp();
                this._router.navigate(['pages', 'dashboard']);
            }
            catch (err) {
                this.hasError = true;
                console.log(err);
            }
        }
        else {
            this.hasError = true;
        }
    }

    constructor(public vm: SignUpViewModel, private _router: Router) { }

    ngOnInit() { }
}
