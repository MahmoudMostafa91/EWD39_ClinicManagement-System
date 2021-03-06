import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './features/register-form/register-form.component';
import { TestHomeComponent } from './features/test-home/test-home.component';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { AuthGuard } from './_helpers/auth.guard';
import { ReservationFormComponent } from './features/reservation-form/reservation-form.component';

import { AddclinicFormComponent } from './features/addclinic-form/addclinic-form.component';
import { ProfileComponent } from './features/profile/profile.component';

import { ClinicInfoComponent } from './features/clinic/clinic-info/clinic-info.component';
import { DoctorProfileComponent } from './features/doctor/doctor-profile/doctor-profile.component';

import { AllClinicsComponent } from 'src/app/features/all-clinics/all-clinics.component';
import { AllDoctorsComponent } from './features/all-doctors/all-doctors.component';
import { AddDoctorFormComponent } from './features/add-doctor-form/add-doctor-form.component';

import { ReservationCelendarComponent } from './features/reservation-celendar/reservation-celendar.component';


const routes: Routes = [
    // canActivate: [AuthGuard]
    { path: '' , component: TestHomeComponent  },
    { path: 'register', component: RegisterFormComponent },
    { path: 'login', component: LoginFormComponent },
    {path: 'make_reservation/:id', component: ReservationFormComponent , canActivate: [AuthGuard] },
    { path: 'addclinic', component: AddclinicFormComponent , canActivate: [AuthGuard]},
  //  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
    { path: 'view_reservation', component: ReservationCelendarComponent , canActivate: [AuthGuard]},
    { path: 'clinicProfile/:id', component: ClinicInfoComponent , canActivate: [AuthGuard] },
    { path: 'doctorProfile/:id', component: DoctorProfileComponent , canActivate: [AuthGuard]},
    { path: 'AllClinics', component: AllClinicsComponent  },
    { path: 'AllDoctors', component: AllDoctorsComponent },
    { path: 'AddDr/:id', component: AddDoctorFormComponent , canActivate: [AuthGuard]},
    { path: 'Home', component: TestHomeComponent },

    { path: 'profile/:id/:vid', component: ProfileComponent},
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', component: TestHomeComponent, canActivate: [AuthGuard] },



    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
