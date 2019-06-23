import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingModule } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS  } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { UpperHeaderComponent } from './core/header/upper-header/upper-header.component';
import { LowerHeaderComponent } from './core/header/lower-header/lower-header.component';
import { FooterComponent } from './core/footer/footer.component';

import { RegisterFormComponent } from './features/register-form/register-form.component';
import { TestHomeComponent } from './features/test-home/test-home.component';
import { LoginFormComponent } from './features/login-form/login-form.component';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';




import { fakeBackendProvider } from '../app/_helpers/backend';



import { OurServiceComponent } from './features/our-service/our-service.component';
import { OffersComponent } from './features/offers/offers.component';
import { AdvartismentsComponent } from './features/advartisments/advartisments.component';
import { DoctorListingComponent } from './features/doctor-listing/doctor-listing.component';

//import { DoctorComponent } from './features/doctor/doctor.component';
import { DoctorInfoDisplayComponent } from './features/doctor/doctor-info-display/doctor-info-display.component';
import { DoctorAvailabilityComponent } from './features/doctor/doctor-availability/doctor-availability.component';
import { DoctorProfileComponent } from './features/doctor/doctor-profile/doctor-profile.component';
import { ReservationFormComponent } from './features/reservation-form/reservation-form.component';
import { ClinicInfoComponent } from './features/clinic/clinic-info/clinic-info.component';
import { AddclinicFormComponent } from './features/addclinic-form/addclinic-form.component';

import { ProfileComponent } from './features/profile/profile.component';
import { PersonalInfoComponent } from './features/Profile/personal-info/personal-info.component';
import { VitalsComponent } from './features/Profile/vitals/vitals.component';
import { FamilyHistoryComponent } from './features/Profile/family-history/family-history.component';
import { DiseasesComponent } from './features/Profile/diseases/diseases.component';
import { LabInvestigationsComponent } from './features/Profile/lab-investigations/lab-investigations.component';
import { VisitsComponent } from './features/Profile/visits/visits.component';
import { MedicationsComponent } from './features/Profile/medications/medications.component';

// import { DoctorListingComponent } from './features/doctor-listing/doctor-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpperHeaderComponent,
    LowerHeaderComponent,
    FooterComponent,
    DoctorListingComponent,
    ReservationFormComponent,
    RegisterFormComponent,
    TestHomeComponent,
    LoginFormComponent,
    OurServiceComponent,
    OffersComponent,
    AdvartismentsComponent,
    DoctorInfoDisplayComponent,
    DoctorAvailabilityComponent,
    DoctorProfileComponent,
    ReservationFormComponent,
    ClinicInfoComponent,
    AddclinicFormComponent,
    ProfileComponent,
    PersonalInfoComponent,
    VitalsComponent,
    FamilyHistoryComponent,
    DiseasesComponent,
    LabInvestigationsComponent,
    VisitsComponent,
    MedicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
