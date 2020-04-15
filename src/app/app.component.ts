import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  output = 0;
  calculate(input1, input2){
  this.output = Math.pow(parseInt(input1),parseInt(input2))
  } 
}


