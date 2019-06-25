import { Component, OnInit, Input } from '@angular/core';
import { Medication } from 'src/app/_interfaces/medication';
import { FamilyHistory } from 'src/app/_interfaces/family-history';
import { FamilyHistoryService } from 'src/app/_services/_profile-services/family-history.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-family-history',
  templateUrl: './family-history.component.html',
  styleUrls: ['./family-history.component.scss']
})
export class FamilyHistoryComponent implements OnInit {
histories: FamilyHistory[];
@Input() pid;
@Input() vid;
  constructor(public fh: FamilyHistoryService) { }

  ngOnInit() {
    this.histories = this.fh.getByUser(Number(this.pid));
  }

}
