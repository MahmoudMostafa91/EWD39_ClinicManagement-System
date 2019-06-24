import { Component, OnInit } from '@angular/core';
import { clinicdata } from 'src/app/_models/clinicdata';
import { ClinicService } from 'src/app/_services/clinic.service';
import { ActivatedRoute } from '@angular/router';

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
    public clinic: clinicdata;
    sub;
    id;
    constructor(private _Activatedroute:ActivatedRoute,
                private newservice: ClinicService) {
                 }

  ngOnInit() {
  //     this.sub=this._Activatedroute.paramMap.subscribe(params => { 
  //      console.log(params);
  //      this.id = params.get('id'); 
  //      console.log(this.id);
  //       this.clinic = this.newservice.getById(this.id) ;
  //     this.getClinic(this.id); 
  //  });
  this.id = this._Activatedroute.snapshot.paramMap.get('id');
  this.getClinic(this.id);
  }


  getClinic(id) {
      this.newservice.getById(id).subscribe(
         data => { this.clinic = data},
         err => console.error(err),
         () => console.log(id)
       );
     }

}
