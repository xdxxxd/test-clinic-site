import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../../entities/patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {
  @Input() public patient: Patient;

  constructor() { }

  ngOnInit() {
  }

}
