import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Diseases } from 'src/app/_interfaces/diseases';
import { DiseasesService } from 'src/app/_services/_profile-services/diseases.service';
import { FormGroup, FormControl } from '@angular/forms';
import { pipeDef } from '@angular/core/src/view';
import { PersonalDataService } from 'src/app/_services/_profile-services/personal-data.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss']
})

export class DiseasesComponent implements OnInit {
  @Input() pid;
  @Input() vid;
  Chdiseasses: Diseases[];
  Cdiseasses: Diseases[];
  Pdiseasses: Diseases[];
  ChdieseaseForm: FormGroup;
  CdieseaseForm: FormGroup;
  PdieseaseForm: FormGroup;
  constructor(public diseases1: DiseasesService, public us: PersonalDataService) { }

  ngOnInit() {
    this.Chdiseasses = this.diseases1.getByType('Chronic').filter(d => d.patientId === Number(this.pid));
    this.Cdiseasses = this.diseases1.getByType('Current').filter(d => d.patientId === Number(this.pid));
    this.Pdiseasses = this.diseases1.getByType('Previous').filter(d => d.patientId === Number(this.pid));
    this.ChdieseaseForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      infectionDate: new FormControl(),
      hospitalization: new FormControl(),
        // type: new FormControl(),
    });
    this.CdieseaseForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      infectionDate: new FormControl(),
      hospitalization: new FormControl(),
        // type: new FormControl(),
    });
    this.PdieseaseForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      infectionDate: new FormControl(),
      recoveryDate: new FormControl(),
      hospitalization: new FormControl(),
        // type: new FormControl(),
    });
  }
  onSave(type: string) {
    let disease;
    if (type === 'Chronic') {
      disease = this.ChdieseaseForm.getRawValue() as Diseases;
      disease.patientId = Number(this.pid);
      disease.patient = this.us.getById(Number(this.pid));
      disease.type = type;
      this.diseases1.add(disease);
      this.Chdiseasses = this.diseases1.getByType('Chronic').filter(d => d.patientId === Number(this.pid));
      this.ChdieseaseForm.reset();

    } else if (type === 'Current') {
      disease = this.CdieseaseForm.getRawValue() as Diseases;
      disease.patientId = Number(this.pid);
      disease.patient = this.us.getById(Number(this.pid));
      disease.type = type;
      this.diseases1.add(disease);
      this.Cdiseasses = this.diseases1.getByType('Current').filter(d => d.patientId === Number(this.pid));
      this.CdieseaseForm.reset();
    } else {
      disease = this.PdieseaseForm.getRawValue() as Diseases;
      disease.patientId = Number(this.pid);
      disease.patient = this.us.getById(Number(this.pid));
      disease.type = type;
      this.diseases1.add(disease);
      this.Pdiseasses = this.diseases1.getByType('Previous').filter(d => d.patientId === Number(this.pid));
      this.PdieseaseForm.reset();
    }
  }
}
