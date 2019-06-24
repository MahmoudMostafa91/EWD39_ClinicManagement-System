import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/_interfaces/medication';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
med: Medication;
  constructor() { }

  ngOnInit() {
  }

}
