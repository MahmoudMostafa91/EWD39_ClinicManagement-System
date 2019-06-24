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
  filterdclinics:clinicdata[];
  private _searchterm:string;
  get searchterm():string
 {
    return this._searchterm;
 }
 set searchterm(value:string)
 {
   this._searchterm=value;
 }
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
  }



}


