import { Component, OnInit } from '@angular/core';
import { clinicdata } from 'src/app/_models/clinicdata';
import { ClinicService } from 'src/app/_services/clinic.service';

@Component({
  selector: 'app-clinic-info',
  templateUrl: './clinic-info.component.html',
  styleUrls: ['./clinic-info.component.scss']
})
export class ClinicInfoComponent implements OnInit {
//  clinicdata:clinicdata[];
//   constructor() {
//     this.clinicdata=[
//       {name:'one clinic',phone:'011223444',address:'12 st maady',description:'the best clinic'}
//     ]
    public clinics: clinicdata[];
    constructor(private newservice: ClinicService) { }

  ngOnInit() {
    this.getClinics();

  }


  getClinics() {
      this.newservice.getAll().subscribe(
         data => { this.clinics = data},
         err => console.error(err),
         () => console.log('done loading clinics')
       );
     }

}
