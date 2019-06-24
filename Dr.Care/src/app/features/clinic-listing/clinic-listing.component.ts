import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/_services/clinic.service';
import { clinicdata } from 'src/app/_models/clinicdata';


@Component({
  selector: 'app-clinic-listing',
  templateUrl: './clinic-listing.component.html',
  styleUrls: ['./clinic-listing.component.scss']
})
export class ClinicListingComponent implements OnInit {

  public clinics: clinicdata[];
  constructor(private newservice: ClinicService) { }

  ngOnInit() {
    this.getClinics();
  }

  getClinics() {
    this.newservice.getSomeClinics().subscribe(
       data => { this.clinics = data},
       err => console.error(err),
       () => console.log('done loading clinics')
     );
   }


}
