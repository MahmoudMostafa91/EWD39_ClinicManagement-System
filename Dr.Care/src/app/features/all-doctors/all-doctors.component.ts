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
  searchclinics:DoctorData[];
  filterdDoctors:DoctorData[];
  private _searchterm:string;
  cli: any;
  get searchterm():string
 {
    return this._searchterm;
 }
 set searchterm(value:string)
 {
   this._searchterm=value;
   this.filterdDoctors= this.filterDoctors(value);
 }
 filterDoctors(searchstring:string)
 {
     return this.Doctors.filter(doctor=>doctor.name.toLowerCase().indexOf(searchstring.toLowerCase())!==-1);
 }
  constructor(private newservice: DoctorService) { }

  ngOnInit() {
    this.getDoctors();
    this.filterdDoctors=this.Doctors;
  }

  getDoctors(){
    this.newservice.getAll().subscribe(
      (data) => { this.Doctors = data;},
       err => console.error(err),
       () => console.log('done loading clinics')
     );
    }


}
