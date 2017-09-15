import { Component, OnInit } from '@angular/core';
import { Clinic } from '../../entities/clinic';
import { ClinicsService } from '../../services/clinics.service';
import { ClinicDetailComponent } from '../clinic-detail/clinic-detail.component';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {

  public clinics: Array<Clinic>;
  public selectedClinic: Clinic = null;

  constructor(private clinicsService: ClinicsService) { }

  ngOnInit() {
    this.clinics = this.clinicsService.getAll();
    console.log(this.clinics);
  }

  public onSelect(clinic: Clinic) {
    if (clinic === this.selectedClinic) {
      this.selectedClinic = null;
    } else {
      this.selectedClinic = clinic;
    }
  }

}
