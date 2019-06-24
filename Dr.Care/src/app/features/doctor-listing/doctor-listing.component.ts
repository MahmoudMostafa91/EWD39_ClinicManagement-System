import { Component, OnInit } from '@angular/core';
import { DoctorData } from 'src/app/_models/DoctorData';
import { DoctorService } from 'src/app/_services/Doctor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor-listing',
  templateUrl: './doctor-listing.component.html',
  styleUrls: ['./doctor-listing.component.scss']
})
export class DoctorListingComponent implements OnInit {

  public Doctors: DoctorData[];
  x;
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
