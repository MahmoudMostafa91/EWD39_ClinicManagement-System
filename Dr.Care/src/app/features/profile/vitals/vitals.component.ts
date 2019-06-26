import { Component, OnInit, Input } from '@angular/core';
import { VitalTypesService } from 'src/app/_services/_profile-services/vital-types.service';
import { Vital } from 'src/app/_interfaces/vitals';
import { VitalService } from 'src/app/_services/_profile-services/vitals.service';
import { FormGroup, FormControl } from '@angular/forms';
import { VitalTypes } from 'src/app/_interfaces/vitalTypes';


@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent implements OnInit {
  vitalsList: Vital[];
  vital: Vital;
  vitalTypes: VitalTypes[];
  @Input() pid;
  @Input() vid;
  vitalsForm: FormGroup;
  constructor(public vit: VitalService, public vita: VitalTypesService) { }

  ngOnInit() {
    this.vitalsList = this.vit.getAll().filter(a => a.pId === Number(this.pid));
    this.vitalTypes = this.vita.getAll();
    this.vitalsForm = new FormGroup({
      type: new FormControl(),
      measurment: new FormControl(),
      date: new FormControl()
    });
  }
  onSave() {
    this.vital = this.vitalsForm.getRawValue() as Vital;
    this.vital.pId = this.pid;
    this.vital.vid = this.vid;
    this.vit.add(this.vital);
    console.log(this.vit);
    console.log(this.vitalsForm.getRawValue());
    this.vitalsList = this.vit.getAll().filter(a => a.pId === Number(this.pid));
    this.vitalsForm.reset();
  }

  onEdit() {
    this.vitalsForm.patchValue(
      {

      }
    );
  }

}
