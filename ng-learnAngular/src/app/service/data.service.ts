import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headerJSON={"title":"Angular Training","header":["Left","Right","About Us"]}

  constructor() { }

  get getHeader(){
    return this.headerJSON;
  }
}
