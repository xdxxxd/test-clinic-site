import { Component, Input, OnInit } from '@angular/core';
import { Clinic } from '../../entities/clinic';

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.scss']
})
export class ClinicDetailComponent implements OnInit {
  @Input() public clinic: Clinic;

  constructor() { }

  ngOnInit() {
  }

}
