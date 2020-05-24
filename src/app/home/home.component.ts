import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	projectTeams: any[] = [
		{ "title": "short video", "iconName": "regular-red-head-male" },
		{ "title": "mobile page", "iconName": "regular-black-skyblue-male" },
		{ "title": "web design", "iconName": "regular-peach-black-male" },
		{ "title": "taxi-hailing", "iconName": "regular-yellow-black-male" },
		{ "title": "illustrations", "iconName": "regular-peach-blonde-female" }];

}
