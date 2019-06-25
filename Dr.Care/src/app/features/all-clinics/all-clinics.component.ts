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
  searchclinics:clinicdata[];
  filterdclinics:clinicdata[];
  private _searchterm:string;
  cli: any;
  get searchterm():string
 {
    return this._searchterm;
 }
 set searchterm(value:string)
 {
   this._searchterm=value;
   this.filterdclinics= this.filterclinics(value);
 }
 filterclinics(searchstring:string)
 {
     return this.clinics.filter(clinic=>clinic.name.toLowerCase().indexOf(searchstring.toLowerCase())!==-1);
 }
  constructor(private newservice: ClinicService) { }

  ngOnInit() {
      this.getClinics();
       this.filterdclinics=this.clinics;
  }

  getClinics() {
    this.newservice.getAll().subscribe(
       data => { this.clinics = data },
       err => console.error(err),
       () => console.log('done loading clinics')
     );
   }


}
