import { Component, OnInit } from '@angular/core';
import { Diseases } from 'src/app/_interfaces/diseases';
import { DiseasesService } from 'src/app/_services/_profile-services/diseases.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss']
})
export class DiseasesComponent implements OnInit {
  Chdiseasses: Diseases[];
  Cdiseasses: Diseases[];
  Pdiseasses: Diseases[];
  ChdieseaseForm: FormGroup;
  CdieseaseForm: FormGroup;
  PdieseaseForm: FormGroup;
  constructor(public diseases1: DiseasesService) { }

  ngOnInit() {
    this.Chdiseasses = this.diseases1.getByType('Chronic');
    this.Cdiseasses = this.diseases1.getByType('Current');
    this.Pdiseasses = this.diseases1.getByType('Previous');
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
    console.log(this.diseases1);
    console.log(this.Chdiseasses);
    if (type === 'Chronic') {
      disease = this.ChdieseaseForm.getRawValue() as Diseases;
      disease.type = type;
      this.diseases1.add(disease);
      this.Chdiseasses = this.diseases1.getByType('Chronic');
      this.ChdieseaseForm.reset();

    } else if (type === 'Current') {
      disease = this.CdieseaseForm.getRawValue() as Diseases;
      disease.type = type;
      this.diseases1.add(disease);
      this.Cdiseasses = this.diseases1.getByType('Current');
      this.CdieseaseForm.reset();
    } else {
      disease = this.PdieseaseForm.getRawValue() as Diseases;
      disease.type = type;
      this.diseases1.add(disease);
      this.Pdiseasses = this.diseases1.getByType('Previous');
      this.PdieseaseForm.reset();
    }
  }

}
