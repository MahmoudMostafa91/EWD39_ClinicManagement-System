import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Medication } from 'src/app/_interfaces/medication';
import { MedicationService } from 'src/app/_services/_profile-services/medication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { pipeDef } from '@angular/core/src/view';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { PersonalDataService } from 'src/app/_services/_profile-services/personal-data.service';
import { VisitService } from 'src/app/_services/_profile-services/visit.service';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.scss']
})
export class MedicationsComponent implements OnInit {
medications: Medication[];
medicationForm: FormGroup;
@Output() editedMed: Medication;
@Input() pid;
@Input() vid;
  constructor(public md: MedicationService, public us: PersonalDataService, public vs: VisitService) {
  }

  ngOnInit() {
    this.medications = this.md.getAll().filter(m => m.patientId === Number(this.pid));
    this.medicationForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      noOfTimes: new FormControl(),
      unitOfTime: new FormControl('day'),
      doctor: new FormControl(),
      clinic: new FormControl(),
      from: new FormControl(),
      period: new FormControl(),
      notes: new FormControl()
    });
  }

  onSave(med?: Medication) {
    if (med === undefined) {
      med = this.medicationForm.getRawValue() as Medication;
      med.patientId = this.pid;
      med.patient = this.us.getById(Number(this.pid));
      med.clinic.name = this.medicationForm.getRawValue().clinic;
      med.doctor.name = this.medicationForm.getRawValue().doctor;
      this.md.add(med);
    } else {
      med = this.medicationForm.getRawValue() as Medication;
      med.id = this.editedMed.id;
      med.patientId = this.pid;
      med.patient = this.us.getById(Number(this.pid));
      med.clinic.name = this.medicationForm.getRawValue().clinic;
      med.doctor.name = this.medicationForm.getRawValue().doctor;
      // med.vid = this.vid;
      // med.clinic = this.vs.getById(Number(this.vid)).clinic;
      // med.doctor = this.vs.getById(Number(this.vid)).doctor;
      this.md.save(med);
    }
    this.medications = this.md.getAll();
    this.editedMed = undefined;
    this.medicationForm.reset();
    console.log(med);
    console.log(this.md);
  }

  onEditMode(med: Medication) {
    this.medicationForm.patchValue(
     {id: med.id,
     name: med.name,
     noOfTimes: med.noOfTimes,
     doctor: med.doctor,
     clinic: med.clinic,
     from: med.from,
     period: med.period,
     notes: med.notes
    }
   );
    this.editedMed = med;
  }

  onDelete(med: any) {
    console.log(med as Medication);
    this.md.delete((med as Medication).id);
    this.medications = this.md.getAll();
    console.log(this.medications);
    console.log(this.md);
  }
}
