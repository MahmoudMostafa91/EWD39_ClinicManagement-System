import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/_services/clinic.service';
import { clinicdata } from 'src/app/_models/clinicdata';



@Component({
  selector: 'app-all-clinics',
  templateUrl: './all-clinics.component.html',
  styleUrls: ['./all-clinics.component.scss']
})


export class AllClinicsComponent implements OnInit {

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
