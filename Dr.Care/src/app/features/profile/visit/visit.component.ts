import { Component, OnInit, Input, Output } from '@angular/core';
import { Visit } from 'src/app/_interfaces/visit';
import { VisitService } from 'src/app/_services/_profile-services/visit.service';
import { visitAstChildren } from '@angular/compiler';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {
 visits: Visit[];
 @Input() pid;
 @Input() vid;
 @Output() visiId;
 choosedVisit: Visit;
  constructor(public vs: VisitService) {
  }

  ngOnInit() {
    this.visits = this.vs.getAll().filter(v => v.patientId === Number(this.pid));
  }

  onReportChoosing(id: number) {
    this.choosedVisit = this.vs.getById(id);
  }

}
