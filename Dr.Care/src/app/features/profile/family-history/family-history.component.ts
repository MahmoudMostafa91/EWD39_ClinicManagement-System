import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/_interfaces/medication';

@Component({
  selector: 'app-family-history',
  templateUrl: './family-history.component.html',
  styleUrls: ['./family-history.component.scss']
})
export class FamilyHistoryComponent implements OnInit {
med: Medication;
  constructor() { }

  ngOnInit() {
  }

}
