import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/_interfaces/personal-info';
import { PersonalDataService } from 'src/app/_services/_profile-services/personal-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { BloodTypes } from 'src/app/_interfaces/bloodType';
import { BloodTypesService } from 'src/app/_services/_profile-services/blood-type.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  personalInfo: User;
  @Input() pid; 
  infoForm: FormGroup;
  bloodTypes: BloodTypes[];
  pf: User;
  @ViewChild('imgPath') value: ElementRef;
  constructor(public pI: PersonalDataService, public bT: BloodTypesService) { }

  ngOnInit() {
    this.personalInfo = this.pI.getById(Number(this.pid));
    console.log(this.pid);
    console.log(this.personalInfo);
    this.bloodTypes = this.bT.getAll();
    this.infoForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      bloodType: new FormControl(),
      occupation: new FormControl(),
      adress: new FormControl(),
      telephone: new FormControl(),
      imgURL: new FormControl(),
    });
  }
  onSave() {
    this.pf = this.infoForm.getRawValue() as User;
    this.pf.Id = this.pid;
    this.pI.save(this.pf);
    console.log(this.pI);
    this.personalInfo = this.pf;

    console.log(this.pf);
    this.infoForm.reset();
    const y = this.value.nativeElement.value;
  }
  onEdit() {
    this.infoForm.patchValue(
      {
        id: this.personalInfo.Id,
        name: this.personalInfo.name,
        age: this.personalInfo.age,
        gender: this.personalInfo.gender,
        bloodType: this.personalInfo.bloodType,
        occupation: this.personalInfo.occupation,
        adress: this.personalInfo.adress,
        telephone: this.personalInfo.telephone,
        imgURL: this.personalInfo.imgURL
      }
    );
  }

}
