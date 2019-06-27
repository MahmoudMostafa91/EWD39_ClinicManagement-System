import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  pid;
  vid;
  reportsent: EventEmitter<any>;
  constructor(public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.vid = this.activateRoute.snapshot.paramMap.get('vid');
    this.pid = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.pid);
    console.log(this.vid);
  }
ondataSaved()
{
  this.reportsent.emit()
}
}
