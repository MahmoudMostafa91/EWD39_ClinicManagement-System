import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  pid;
  vid;
  constructor(public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.vid = this.activateRoute.snapshot.paramMap.get('vid');
    this.pid = this.activateRoute.snapshot.paramMap.get('id');
  }

}
