import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClinicsService } from './services/clinics.service';
import { TherapistsService } from './services/therapists.service';

import { AppComponent } from './app.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { ClinicDetailComponent } from './components/clinic-detail/clinic-detail.component';
import { TherapistsComponent } from './components/therapists/therapists.component';
import { TherapistDetailComponent } from './components/therapist-detail/therapist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicsComponent,
    ClinicDetailComponent,
    TherapistsComponent,
    TherapistDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ClinicsService,
    TherapistsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
