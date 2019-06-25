import {  Input,Component, OnInit } from '@angular/core';
import { doctordates } from 'src/app/_models/doctordates';
import { DoctorData }  from 'src/app/_models/DoctorData'

@Component({
  selector: 'app-doctor-availability',
  templateUrl: './doctor-availability.component.html',
  styleUrls: ['./doctor-availability.component.scss']
})
export class DoctorAvailabilityComponent implements OnInit {
  @Input() Doctor: DoctorData;
 dates:doctordates[];
 
  constructor() { 
  this.dates=[
    {day:'Monday'},
    {day:'friday'}
  ]
  }

  ngOnInit() {
  }

}
