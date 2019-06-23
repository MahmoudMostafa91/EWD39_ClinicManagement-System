import { Component, OnInit } from '@angular/core';
import { DoctorData } from 'src/app/_models/DoctorData';
import { DoctorService } from 'src/app/_services/Doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {
//  clinicdata:clinicdata[];
//   constructor() {
//     this.clinicdata=[
//       {name:'one clinic',phone:'011223444',address:'12 st maady',description:'the best clinic'}
//     ]
    public Doctor: DoctorData;
    sub;
    id;
    constructor(private _Activatedroute:ActivatedRoute,
                private newservice: DoctorService) {
                 }

  ngOnInit() {
  this.id = this._Activatedroute.snapshot.paramMap.get('id');
  this.getDoctor(this.id);
  }


  getDoctor(id) {
      this.newservice.getById(id).subscribe(
         data => { this.Doctor = data},
         err => console.error(err),
         () => console.log(id)
       );
     }

}
