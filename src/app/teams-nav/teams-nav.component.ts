import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams-nav',
  templateUrl: './teams-nav.component.html',
  styleUrls: ['./teams-nav.component.css']
})
export class TeamsNavComponent implements OnInit {

  constructor() { }

 @Input() projectTeamsParent;

	projectTeams: any;

	// projectTeams: any[] = [
	// 	{ "title": "short video", "iconName": "regular-red-head-male" },
	// 	{ "title": "mobile page", "iconName": "regular-black-skyblue-male" },
	// 	{ "title": "web design", "iconName": "regular-peach-black-male" },
	// 	{ "title": "taxi-hailing", "iconName": "regular-yellow-black-male" },
	// 	{ "title": "illustrations", "iconName": "regular-peach-blonde-female" }];

	selectedTeam: any;

  ngOnInit() {
	  this.projectTeams = this.projectTeamsParent;
	  this.selectedTeam = this.projectTeams[0];

  }

}
