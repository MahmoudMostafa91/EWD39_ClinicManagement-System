import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { clinicdata } from 'src/app/_models/clinicdata';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  // clinics:clinicdata[];
  // filterdclinics:clinicdata[];
  // private _searchterm:string;
  cli: any;
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
  constructor
   ( 
     private router: Router,
     private authenticationService: AuthenticationService
    ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x); 
      }


      logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

  ngOnInit() {

    //this.filterdclinics=this.clinics;
  }

  // onClick(clinicId:number)
  // {
  //    this.router.navigate(['/clinicProfile',clinicId],
  //    {
  //      queryParams:{'searchterm':this.searchterm,'testparam':'testvalue'}
  //    }
  //    )
  // }

}


