import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

	@Input() isSunThemeParent;
	@Output() getThemeStatusChange = new EventEmitter<boolean>();
 	isSunTheme: boolean;

  constructor() { }

  ngOnInit() {
	  this.isSunTheme = this.isSunThemeParent;
  }

	updateThemeStatus() {
		this.getThemeStatusChange.emit(this.isSunTheme);
	}

}
