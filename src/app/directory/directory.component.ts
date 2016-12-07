import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../services/logging/logging.service';
import { DataService } from '../services/data/data.service';

declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {

	constructor(private route: ActivatedRoute,private logger: LoggingService,private dataService: DataService) { 
		this.ninja = route.snapshot.params['ninja'];
	}
	ngOnInit() {
		// this.dataService.fetchData().subscribe(
  // 			(data) => this.list = data
  // 		);
  		this.fbGetData();
	}

	ninja;
	classes = {'blue':true,'red':false,'underline':true};
	test = true;

	list = [];

	
	logIt(){
		this.logger.log();
	}
	
	fbGetData(){
		firebase.database().ref('/').on('child_added', (snapshot) => {
			this.list.push(snapshot.val());
		});
	}

	fbPostData(ninjaName,belt){
		firebase.database().ref('/').push({name:ninjaName,belt:belt});
	}
}
