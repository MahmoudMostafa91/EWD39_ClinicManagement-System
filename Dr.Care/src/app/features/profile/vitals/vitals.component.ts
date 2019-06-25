import { Component, OnInit, Input } from '@angular/core';
import { Medication } from 'src/app/_interfaces/medication';
import { User } from 'src/app/_interfaces/personal-info';
import { Vital } from 'src/app/_interfaces/vitals';
import { VitalService } from 'src/app/_services/_profile-services/vitals.service';
import { pipeDef } from '@angular/core/src/view';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent implements OnInit {
vitals: Vital[];
@Input() pid;

  constructor(public vit: VitalService) { }

  ngOnInit() {
    this.vitals = this.vit.getAll().filter(a => a.patient.patientId === this.pid);
  }

}
