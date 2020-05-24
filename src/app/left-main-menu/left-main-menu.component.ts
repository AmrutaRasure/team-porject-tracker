import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-main-menu',
  templateUrl: './left-main-menu.component.html',
  styleUrls: ['./left-main-menu.component.css']
})
export class LeftMainMenuComponent implements OnInit {

	constructor(private router: Router) { }

	topPerformer: string = "Frannnk"
	menuItems: any[] = [
	{ "title": "Home page", "icon": "home-menu", "link": "/tbd" },
	{ "title": "Team data", "icon": "team-data-menu", "link": "/tbd" },
	{ "title": "Team project", "icon": "team-project-menu", "link": "/" },
	{ "title": "Team collect", "icon": "team-collect-menu", "link":"/tbd" }]

  ngOnInit() {
  }

  isCurrentMenuSelected(link) {
  	if (link === this.router.url)
	  	return true;
	else
		return false
  }

}
