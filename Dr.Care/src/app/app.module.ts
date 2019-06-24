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

// import { DoctorComponent } from './features/doctor/doctor.component';
import { DoctorInfoDisplayComponent } from './features/doctor/doctor-info-display/doctor-info-display.component';
import { DoctorAvailabilityComponent } from './features/doctor/doctor-availability/doctor-availability.component';
import { DoctorProfileComponent } from './features/doctor/doctor-profile/doctor-profile.component';
import { ClinicInfoComponent } from './features/clinic/clinic-info/clinic-info.component';
import { AddclinicFormComponent } from './features/addclinic-form/addclinic-form.component';

import { ProfileComponent } from './features/profile/profile.component';
import {MedicationsComponent} from './features/profile/medications/medications.component';
import { MedicationService } from './_services/_profile-services/medication.service';
import { VisitComponent } from './features/profile/visit/visit.component';
import { VisitService } from './_services/_profile-services/visit.service';
import { LabInvestigationService } from './_services/_profile-services/lab-investigation.service';
import { LabInvestigationComponent } from './features/profile/lab-investigation/lab-investigation.component';
import { PersonalDataService } from './_services/_profile-services/personal-data.service';
import { DiseasesComponent } from './features/profile/diseases/diseases.component';
import { DiseasesService } from './_services/_profile-services/diseases.service';
import { DoctorService } from './_services/Doctor.service';
import { ClinicService } from './_services/clinic.service';
import { ReportComponent } from './features/profile/report/report.component';
import { VitalService } from './_services/_profile-services/vitals.service';
import { VitalTypesService } from './_services/_profile-services/vital-types.service';
import { PersonalInfoComponent } from './features/profile/personal-info/personal-info.component';
import { VitalsComponent } from './features/profile/vitals/vitals.component';
import { FamilyHistoryComponent } from './features/profile/family-history/family-history.component';


// import { DoctorListingComponent } from './features/doctor-listing/doctor-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpperHeaderComponent,
    LowerHeaderComponent,
    FooterComponent,
    DoctorListingComponent,

    RegisterFormComponent,
    TestHomeComponent,
    LoginFormComponent,

    OurServiceComponent,
    OffersComponent,
    AdvartismentsComponent,
    DoctorInfoDisplayComponent,
    DoctorAvailabilityComponent,
    DoctorProfileComponent,
    ClinicInfoComponent,
    AddclinicFormComponent,
    ProfileComponent,
    MedicationsComponent,
    VisitComponent,
    LabInvestigationComponent,
    DiseasesComponent,
    ReportComponent,
    PersonalInfoComponent,
    VitalsComponent,
    FamilyHistoryComponent,
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
    fakeBackendProvider,
    MedicationService,
    VisitService,
    DiseasesService,
    PersonalDataService,
    DoctorService,
    ClinicService,
    LabInvestigationService,
    VitalService,
    VitalTypesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
