import { Component, OnInit, Output } from '@angular/core';
import { LabInvesigation } from 'src/app/_interfaces/lab-investigation';
import { LabInvestigationService } from 'src/app/_services/_profile-services/lab-investigation.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lab-investigation',
  templateUrl: './lab-investigation.component.html',
  styleUrls: ['./lab-investigation.component.scss']
})
export class LabInvestigationComponent implements OnInit {
  investigations: LabInvesigation[];
  investigationForm: FormGroup;
  @Output() editedInvest: LabInvesigation;
  constructor(public inv: LabInvestigationService) { }

  ngOnInit() {
  this.investigations = this.inv.getAll();
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
    if (invest === undefined) {
      this.inv.add(currentInvest);
    } else {
      this.inv.save(currentInvest);
    }
    this.investigations = this.inv.getAll();
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
    this.investigations = this.inv.getAll();
  }

}
