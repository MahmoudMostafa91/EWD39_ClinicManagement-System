import { Component, OnInit } from '@angular/core';
import { LabInvesigation } from 'src/app/_interfaces/lab-investigation';
import { LabInvestigationService } from 'src/app/_services/_profile-services/lab-investigation.service';

@Component({
  selector: 'app-lab-investigation',
  templateUrl: './lab-investigation.component.html',
  styleUrls: ['./lab-investigation.component.scss']
})
export class LabInvestigationComponent implements OnInit {
  investigations: LabInvesigation[];
  constructor(public inv: LabInvestigationService) { }

  ngOnInit() {
  this.investigations = this.inv.getAll();
  }

}
