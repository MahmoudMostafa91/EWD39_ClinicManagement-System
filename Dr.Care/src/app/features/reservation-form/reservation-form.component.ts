import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../_services/reservation.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
   reservationForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;
  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private reservationService: ReservationService) { }



  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      form_name: ['', Validators.required],
      form_email: ['', Validators.required],
      form_phone: ['', Validators.required],
      form_appontment_date: ['', Validators.required],
      form_message: ['', Validators.required]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.reservationForm.controls; }
  
  onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.reservationForm.invalid) {
            return;
        }

        this.loading = true;
        this.reservationService.reservation(this.reservationForm.value)
            .pipe(first())
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
