import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() id;
  @Input() vid;

  constructor() { }

  ngOnInit() {
    console.log(this.id);
  }

}
