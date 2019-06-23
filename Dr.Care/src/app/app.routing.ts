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

const routes: Routes = [
    { path: '', component: TestHomeComponent , canActivate: [AuthGuard]},
    { path: 'register', component: RegisterFormComponent },
    { path: 'login', component: LoginFormComponent },
     {path: 'make_reservation', component: ReservationFormComponent },
    { path: 'addclinic', component: AddclinicFormComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'clinicProfile/:id', component: ClinicInfoComponent },
    { path: 'doctorProfile/:id', component: DoctorProfileComponent },




    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);