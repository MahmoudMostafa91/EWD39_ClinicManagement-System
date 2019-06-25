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
  //filterdclinics:clinicdata[];
  //private _searchterm:string;
//   cli: any;
//   get searchterm():string
//  {
//     return this._searchterm;
//  }
//  set searchterm(value:string)
//  {
//    this._searchterm=value;
//    this.filterdclinics= this.filterclinics(value);
//  }
//  filterclinics(searchstring:string)
//  {
//      return this.clinics.filter(clinic=>clinic.name.toLowerCase().indexOf(searchstring.toLowerCase())!==-1);
//  }
  constructor(private newservice: ClinicService) { }

  ngOnInit() {
    this.getClinics();
   // this.filterdclinics=this.clinics;
  }

  getClinics() {
    this.newservice.getSomeClinics().subscribe(
       data => { this.clinics = data},
       err => console.error(err),
       () => console.log('done loading clinics')
     );
   }


}
