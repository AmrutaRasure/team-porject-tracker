import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-skills-menu',
  templateUrl: './left-skills-menu.component.html',
  styleUrls: ['./left-skills-menu.component.css']
})
export class LeftSkillsMenuComponent implements OnInit {

  constructor() { }

	

	skillsMenuItems: any[] = [
		{ "title": "ui/ux design", "empCount": 178 },
		{ "title": "web design", "empCount": 354 },
		{ "title": "illustrations", "empCount": 78 },
		{ "title": "Dynamic effect", "empCount": 132 }]

	

  ngOnInit() {
	  
  }

}
