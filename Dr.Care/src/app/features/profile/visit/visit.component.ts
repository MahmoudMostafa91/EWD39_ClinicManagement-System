import { Component, OnInit } from '@angular/core';
import { Visit } from 'src/app/_interfaces/visit';
import { VisitService } from 'src/app/_services/_profile-services/visit.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {
 visits: Visit[];
  constructor(public vs: VisitService) {
  }

  ngOnInit() {
    this.visits = this.vs.getAll();
  }

}
