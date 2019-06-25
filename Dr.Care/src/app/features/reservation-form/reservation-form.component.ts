import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../_services/reservation.service';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/_services/user.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { DoctorData } from 'src/app/_models/DoctorData';
// import { ClinicService } from 'src/app/_services/clinic.service';
import { DoctorService } from 'src/app/_services/Doctor.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
   reservationForm: FormGroup;
   currentUser: any;
  //  users = [];
   doctor : DoctorData;
  //  clinic_name: string;
  //  doctor_name: string;
  //  doctorFK : number;
    loading = false;
    submitted = false;
    error: string;
    myForm;

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private reservationService: ReservationService,
               private authenticationService: AuthenticationService,
               private doctorService : DoctorService,
               private ActivatedRoute: ActivatedRoute) {  }



  ngOnInit() {
      this.getDoctor(this.ActivatedRoute.snapshot.paramMap.get(`id`));
      this.currentUser = this.authenticationService.currentUser;
      this.reservationForm = this.formBuilder.group({
        user_id: ['', Validators.required],
        doctor: ['', Validators.required],
        appointment_date: ['', Validators.required],
        message: ['', Validators.required]
      });
    }



  getDoctor(id) {
    this.doctorService.getById(id).subscribe(
      (data) => { this.doctor= data;},
       err => console.error(err),
       () => console.log(this.doctor.name)
     );
    
  }


//   private loadAllUsers() {
//     this.userService.getAll()
//         .pipe(first())
//         .subscribe(users => this.users = users);
// }

  // convenience getter for easy access to form fields
  get f() { return this.reservationForm.controls; }
  AddReservation(doctor) {
    this.submitted = true;
    this.loading = true;
    this.myForm = this.reservationForm.value;
    this.myForm.doctor = doctor;
    this.myForm.user_id = this.currentUser.id;
    this.reservationService.Add(this.myForm);
    this.router.navigate(['/view_reservation']);
    console.log(this.myForm);   
    }
}
