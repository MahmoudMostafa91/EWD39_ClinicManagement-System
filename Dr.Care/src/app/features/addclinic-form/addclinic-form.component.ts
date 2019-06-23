import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ClinicService } from '../../_services/clinic.service';


@Component({ templateUrl: 'addclinic-form.component.html' })
export class AddclinicFormComponent implements OnInit {
    addClinicForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private clinicService: ClinicService
    ) { }

    ngOnInit() {
        this.addClinicForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.addClinicForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.addClinicForm.invalid) {
            return;
        }

        this.loading = true;
        this.clinicService.Add(this.addClinicForm.value);
        this.router.navigate(['/profile']);
            // .(first())
            // .subscribe(
            //     data => {
            //         this.router.navigate(['/login'], { queryParams: { registered: true }});
            //     },
            //     error => {
            //         this.error = error;
            //         this.loading = false;
            //     });
    }
}
