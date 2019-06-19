import { Routes, RouterModule } from '@angular/router';

import { RegisterFormComponent } from './features/register-form/register-form.component';
import { TestHomeComponent } from './features/test-home/test-home.component';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { AuthGuard } from './_helpers/auth.guard';



const routes: Routes = [
    { path: '', component: TestHomeComponent , canActivate: [AuthGuard]},
    { path: 'register', component: RegisterFormComponent },
    { path: 'login', component: LoginFormComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);