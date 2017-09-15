import { Routes } from '@angular/router';

import { TherapistsComponent } from './components/therapists/therapists.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { NoContentComponent } from './pages/no-content';
import { PatientsComponent } from './components/patients/patients.component';

export const ROUTES: Routes = [
  {path: '', pathMatch: 'full', component: ClinicsComponent},
  {path: 'clinics', pathMatch: 'full', component: ClinicsComponent},
  {path: 'therapists', pathMatch: 'full', component: TherapistsComponent},
  {path: 'patients', pathMatch: 'full', component: PatientsComponent},
  { path: '**', component: NoContentComponent }
];
