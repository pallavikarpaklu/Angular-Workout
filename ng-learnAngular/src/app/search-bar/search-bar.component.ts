import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  //@Input ('headerInput') xyz ;
  //headerJSON={"title":"Angular Training","header":["Home","shopping","About Us"]}
  xyz;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.xyz = this.data.getHeader;
  }
}
