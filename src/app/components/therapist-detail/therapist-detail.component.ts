import { Component, Input, OnInit } from '@angular/core';
import { Therapist } from '../../entities/therapist';

@Component({
  selector: 'app-therapist-detail',
  templateUrl: './therapist-detail.component.html',
  styleUrls: ['./therapist-detail.component.scss']
})
export class TherapistDetailComponent implements OnInit {
  @Input() public therapist: Therapist;

  constructor() { }

  ngOnInit() {
  }

}
