import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './features/register-form/register-form.component';
import { TestHomeComponent } from './features/test-home/test-home.component';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { AuthGuard } from './_helpers/auth.guard';
import { ReservationFormComponent } from './features/reservation-form/reservation-form.component';



const routes: Routes = [
    { path: '', component: TestHomeComponent , canActivate: [AuthGuard]},
    { path: 'register', component: RegisterFormComponent },
    { path: 'login', component: LoginFormComponent },
     {path: 'reservation', component: ReservationFormComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);