import { Component } from '@angular/core';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { TherapistsComponent } from './components/therapists/therapists.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clinic home page';
}
