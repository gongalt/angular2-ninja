import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works cvcxvxvxvxcvx!';
  customNinja = {
  	name: "Hello",
  	mmr: 2700
  }
  yell(e){
  	console.log(e);
  	alert('I am Yelling');
  }

}
