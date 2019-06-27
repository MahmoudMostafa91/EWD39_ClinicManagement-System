import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VisitService } from 'src/app/_services/_profile-services/visit.service';
import { Visit } from 'src/app/_interfaces/visit';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { Vital } from 'src/app/_interfaces/vitals';
import { Medication } from 'src/app/_interfaces/medication';
import { VitalService } from 'src/app/_services/_profile-services/vitals.service';
import { VitalTypes } from 'src/app/_interfaces/vitalTypes';
import { VitalTypesService } from 'src/app/_services/_profile-services/vital-types.service';
import { MedicationService } from 'src/app/_services/_profile-services/medication.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() pid;
  @Input() vid;
  vitalTypes: VitalTypes[];
  visit: Visit;
  vitals: Vital[];
  medications: Medication[];
  reportform: FormGroup;
  constructor(public visits: VisitService, public vit: VitalService, public vita: VitalTypesService, public med: MedicationService) { }

  ngOnInit() {
    this.visit = this.visits.getById(Number(this.vid));
    console.log(this.visit);
    this.vitalTypes = this.vita.getAll();
    console.log(this.vitalTypes);
    this.reportform = new FormGroup({
    complaints: new FormControl(),
    procedures: new FormControl(),
    diagnosis: new FormControl(),
    vitals: new FormArray([]),
    medications: new FormArray([])
    });
  }
  get Med() {
    return ((this.reportform.controls.medications)as FormArray).controls;
  }

  onSave() {
    this.visit.diagnosis = this.reportform.getRawValue().diagnosis;
    this.visit.complaints = this.reportform.getRawValue().complaints;
    this.visit.procedures = this.reportform.getRawValue().procedures;
    this.vitals = this.reportform.getRawValue().vitals;
    this.visit.vitals = this.vitals;
    this.medications = this.reportform.getRawValue().medications;
    this.visit.medications = this.medications;
    this.addToVitals(this.vitals);
    this.addToMed(this.medications);
    console.log(this.medications);
    console.log(this.visit);
  }

  addToVitals(vits: Vital[]) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < vits.length; i++) {
      vits[i].date = this.visit.date;
      vits[i].vid = this.visit.id;
      vits[i].patient = this.visit.patient;
      this.vit.add(vits[i]);
    }
  }

  addToMed(meds: Medication[]) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < meds.length; i++) {
      meds[i].clinic = this.visit.clinic;
      meds[i].doctor = this.visit.doctor;
      meds[i].patient = this.visit.patient;
      meds[i].from = this.visit.date;
      meds[i].vid = this.visit.id;
      this.med.add(meds[i]);
    }
  }

  addMed() {
    (this.reportform.controls.medications as FormArray).push(new FormGroup({
      name: new FormControl(),
      noOfTimes: new FormControl(),
      unitOfTime: new FormControl(),
      period: new FormControl(),
      notes: new FormControl()
    }));
  }
  get Vit() {
    return ((this.reportform.controls.vitals)as FormArray).controls;
  }
  addVit() {
    (this.reportform.controls.vitals as FormArray).push(new FormGroup({
      type: new FormControl('Blood Pressure'),
      measurment: new FormControl(),
    }));
  }


  onsaveData()
  {
    this.saveData.emit;
  }
}
