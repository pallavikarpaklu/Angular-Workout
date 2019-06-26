import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  //@Input() 
  leftInput  ={"root":["Dashboard","Order","Products","Customers","Reports","Integrations"],"SavedReports":["Current Month","Last Quarter","Social Engagement","Year End Sale"]}

  constructor() { }

  ngOnInit() {
  }

}
