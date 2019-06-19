import { Component, OnInit } from '@angular/core';
import { doctordates } from 'src/app/_models/doctordates';

@Component({
  selector: 'app-doctor-availability',
  templateUrl: './doctor-availability.component.html',
  styleUrls: ['./doctor-availability.component.scss']
})
export class DoctorAvailabilityComponent implements OnInit {
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
