import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './features/register-form/register-form.component';
import { TestHomeComponent } from './features/test-home/test-home.component';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { AuthGuard } from './_helpers/auth.guard';

import { AddclinicFormComponent } from './features/addclinic-form/addclinic-form.component';
import { ProfileComponent } from './features/profile/profile.component';

const routes: Routes = [
    { path: 'register', component: RegisterFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'addclinic', component: AddclinicFormComponent },
    { path: 'profile/:id/:vid', component: ProfileComponent},
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', component: TestHomeComponent , canActivate: [AuthGuard]},



    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
