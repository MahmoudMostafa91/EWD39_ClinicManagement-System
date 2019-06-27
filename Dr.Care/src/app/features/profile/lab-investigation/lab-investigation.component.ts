import { Component, OnInit, Output, Input } from '@angular/core';
import { LabInvesigation } from 'src/app/_interfaces/lab-investigation';
import { LabInvestigationService } from 'src/app/_services/_profile-services/lab-investigation.service';
import { FormGroup, FormControl } from '@angular/forms';
import { pipeDef } from '@angular/core/src/view';
import { PersonalDataService } from 'src/app/_services/_profile-services/personal-data.service';

@Component({
  selector: 'app-lab-investigation',
  templateUrl: './lab-investigation.component.html',
  styleUrls: ['./lab-investigation.component.scss']
})
export class LabInvestigationComponent implements OnInit {
  investigations: LabInvesigation[];
  investigationForm: FormGroup;
  @Output() editedInvest: LabInvesigation;
  @Input() pid;
  @Input() vid;
  constructor(public inv: LabInvestigationService, public us: PersonalDataService) { }

  ngOnInit() {
  this.investigations = this.inv.getByUser(Number(this.pid));
  this.investigationForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    labName: new FormControl(),
    date: new FormControl(),
    notes: new FormControl(),
    // type: new FormControl(),
  });
  }

  onSave(investType: string, invest?: LabInvesigation) {
    const currentInvest = this.investigationForm.getRawValue() as LabInvesigation;
    currentInvest.type = investType;
    currentInvest.patientId = Number(this.pid);
    currentInvest.patient = this.us.getById(Number(this.pid));
    if (invest === undefined) {
      this.inv.add(currentInvest);
    } else {
      currentInvest.id = invest.id;
      this.inv.save(currentInvest);
    }
    this.investigations = this.inv.getByUser(Number(this.pid));
    this.editedInvest = undefined;
    this.investigationForm.reset();
  }

  onEditMode(invest: LabInvesigation) {
    this.investigationForm.setValue({
      id: invest.id,
      name: invest.name,
      labName: invest.labName,
      date: invest.date,
      notes: invest.notes
    }
    );
    this.editedInvest = invest;
  }

  onDelete(invest: LabInvesigation) {
    this.inv.delete(invest.id);
    this.investigations = this.inv.getByUser(Number(this.pid));
  }

}
