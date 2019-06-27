import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../_services/authentication.service';
import { UserService } from '../../_services/user.service';
import { PersonalDataService } from 'src/app/_services/_profile-services/personal-data.service';
import { User } from 'src/app/_interfaces/personal-info';


@Component({ templateUrl: 'register-form.component.html' })
export class RegisterFormComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;
    user: User = {}

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        public Personal: PersonalDataService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        var fName = this.registerForm.value.firstName;
        var lName = this.registerForm.value.lastName;
        var fullName = fName + lName;
        this.user.name = fullName;
        this.Personal.add(this.user);
        console.log(this.Personal);
        console.log(this.user);
        this.userService.register(this.registerForm.value)
            .subscribe(
                data => {
                    this.router.navigate(['/login'], { queryParams: { registered: true }});
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}