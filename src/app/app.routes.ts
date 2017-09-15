import { Routes } from '@angular/router';

import { TherapistsComponent } from './components/therapists/therapists.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
  {path: '', pathMatch: 'full', component: ClinicsComponent},
  {path: 'clinics', pathMatch: 'full', component: ClinicsComponent},
  {path: 'therapists', pathMatch: 'full', component: TherapistsComponent},
  { path: '**', component: NoContentComponent }
];
