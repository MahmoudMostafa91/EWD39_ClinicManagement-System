import { Component, OnInit } from '@angular/core';
import { DoctorData } from 'src/app/_models/DoctorData';
import { DoctorService } from 'src/app/_services/Doctor.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.scss']
})
export class AllDoctorsComponent implements OnInit {

  public Doctors: DoctorData[];
  constructor(private newservice: DoctorService) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors(){
    this.newservice.getAll().subscribe(
      (data) => { this.Doctors = data;},
       err => console.error(err),
       () => console.log('done loading clinics')
     );
    }


}
