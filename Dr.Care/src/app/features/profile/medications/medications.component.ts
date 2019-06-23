import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Medication } from 'src/app/_interfaces/medication';
import { MedicationService } from 'src/app/_services/_profile-services/medication.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.scss']
})
export class MedicationsComponent implements OnInit {
medications: Medication[];
medicationForm: FormGroup;
@Output() editedMed: Medication;
  constructor(public md: MedicationService) {
  }

  ngOnInit() {
    this.medications = this.md.getAll();
    this.medicationForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      noOfTimes: new FormControl(),
      unitOfTime: new FormControl('day'),
      doctor: new FormControl(),
      clinic: new FormControl(),
      from: new FormControl(),
      to: new FormControl(),
      notes: new FormControl()
    });
  }

  onSave(med?: Medication) {
    if (med === undefined) {
      med = this.medicationForm.getRawValue() as Medication;
      this.md.add(med);
    } else {
      med = this.medicationForm.getRawValue() as Medication;
      this.md.save(med);
    }
    this.medications = this.md.getAll();
    this.editedMed = undefined;
    this.medicationForm.reset();
  }

  onEditMode(med: Medication) {
    this.medicationForm.patchValue(
     {id: med.id,
     name: med.name,
     noOfTimes: med.noOfTimes,
     doctor: med.doctor,
     clinic: med.clinic,
     from: med.from,
     to: med.to,
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
