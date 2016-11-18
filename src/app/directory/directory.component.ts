import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
	ninja;
	classes = {'blue':true,'red':false,'underline':true};
	test = true;

	list = [
		{
			name: 'Gongalt',
			belt: 'black',
		},
		{
			name: 'Kurimz',
			belt: 'purple',
		},
		{
			name: 'Isbotchoy',
			belt: 'blue',
		},

	];

	constructor(private route: ActivatedRoute) { 
		this.ninja = route.snapshot.params['ninja'];
	}

	ngOnInit() {
	}

}
