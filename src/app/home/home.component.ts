import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { LoggingService } from '../services/logging/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	homeTitle = "This is the Home Title...";
	myString = "Tempo";
	myBoolean = true;

	@Input() appComponentNinjas;

	@Output() onYell = new EventEmitter();

	ninja = {
		name: "Yoshi",
		belt: "black"
	}

	alertMe(val){
		alert(val);
	}

	fireYellEvent(e){
		console.log('home');
		console.log(e);
		this.onYell.emit(e);
	}
	logIt(){
		this.logger.log();
	}
	constructor(private logger: LoggingService) { }

	ngOnInit() {

	}

}
