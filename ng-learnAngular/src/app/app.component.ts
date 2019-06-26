import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-learnAngular';

  headerJSON={"title":"Angular Training","header":["Home","shopping","About Us"]}
  leftJSON={"root":["Dashboard","Order","Products","Customers","Reports","Integrations"],"SavedReports":["Current Month","Last Quarter","Social Engagement","Year End Sale"]}


  clicked(event) { 
    alert("clicked me");
 } 

 keyUp(event){
   
 }
 
}
