import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ClinicsService } from './services/clinics.service';
import { TherapistsService } from './services/therapists.service';
import { PatientsService } from './services/patients.service';

import { AppComponent } from './app.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { ClinicDetailComponent } from './components/clinic-detail/clinic-detail.component';
import { TherapistsComponent } from './components/therapists/therapists.component';
import { TherapistDetailComponent } from './components/therapist-detail/therapist-detail.component';
import { NoContentComponent } from './pages/no-content/no-content.component';

import { ROUTES } from './app.routes';
import { HeaderComponent } from './pages/header/header.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicsComponent,
    ClinicDetailComponent,
    TherapistsComponent,
    TherapistDetailComponent,
    NoContentComponent,
    HeaderComponent,
    PatientsComponent,
    PatientDetailComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ClinicsService,
    TherapistsService,
    PatientsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
