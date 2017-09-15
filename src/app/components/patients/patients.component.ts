import { Component, OnInit } from '@angular/core';
import { Patient } from '../../entities/patient';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  public selected: Patient;
  public patients: Array<Patient>;

  constructor(private patientsSevice: PatientsService) { }

  ngOnInit() {
    this.patients = this.patientsSevice.getAll();
  }

  public onSelect(patient: Patient) {
    if (this.selected === patient) {
      this.selected = null;
    } else {
      this.selected = patient;
    }
  }

}
