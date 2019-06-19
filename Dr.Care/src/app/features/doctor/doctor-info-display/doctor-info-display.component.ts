import { Component, OnInit } from '@angular/core';
import { doctorinfo } from 'src/app/_models/doctorinfo';

@Component({
  selector: 'app-doctor-info-display',
  templateUrl: './doctor-info-display.component.html',
  styleUrls: ['./doctor-info-display.component.scss']
})
export class DoctorInfoDisplayComponent implements OnInit {
 doctorinfo:doctorinfo[];
  constructor() { 

    this.doctorinfo=[
      {id:1,name:'soha ahmed',speciality:'dentist',phone:'01146865712',email:'sooha.ahmed@outlook.com'},
    ]
  }

  ngOnInit() {
  }

}
