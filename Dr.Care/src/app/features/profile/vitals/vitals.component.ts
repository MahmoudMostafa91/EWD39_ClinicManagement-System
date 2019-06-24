import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/_interfaces/medication';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss']
})
export class VitalsComponent implements OnInit {
med: Medication;
  constructor() { }

  ngOnInit() {
  }

}
