import { Component, Input, OnInit } from '@angular/core';
import { Therapist } from '../../entities/therapist';
import { TherapistDetailComponent } from '../therapist-detail/therapist-detail.component';
import { TherapistsService } from '../../services/therapists.service';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrls: ['./therapists.component.scss']
})
export class TherapistsComponent implements OnInit {
  @Input() public selected: any;
  public therapists: Therapist[];

  constructor(private therapistsService: TherapistsService) { }

  ngOnInit() {
    this.therapists = this.therapistsService.getAll();
  }

  public onSelect(therapist: Therapist) {
    if (this.selected === therapist) {
      this.selected = null;
    } else {
      this.selected = therapist;
    }
  }

}
