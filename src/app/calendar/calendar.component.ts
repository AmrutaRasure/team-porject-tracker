import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// import { default as _rollupMoment } from 'moment';

const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
	parse: {
		dateInput: 'LL',
	},
	display: {
		dateInput: 'LL',
		monthYearLabel: 'MMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY',
	},
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
	providers: [
		// `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
		// application's root module. We provide it at the component level here, due to limitations of
		// our example generation script.
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
		},

		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
		],
})

export class CalendarComponent implements OnInit {

  date = new FormControl(new Date("04-03-2019"));

	calendarViewTypes: any[] = [
		{ "title": "Day" },
		{ "title": "Week" },
		{ "title": "Month" },
		{ "title": "Year" }];

 selectedViewTypeIndex: number = 2;
 Arr: Array<number>;
 totalDays: number = 30;

	teams: any[] = [
		{
			"title": "short video",
			"timelines": [{ "startDate": "02/04/2019", "endDate": "12/04/2019", "additionalNote": "", "days": "10" }],
			"gaps": [],
			"theme": "red",
		},
		{
			"title": "mobile page",
			"timelines": [{ "startDate": "05/04/2019", "endDate": "10/04/2019", "additionalNote": "", "days": "5" },
				{ "startDate": "17/04/2019", "endDate": "30/04/2019", "additionalNote": "(Note: a complete set of items)", "days": "14" }],
			"gaps": [{ "startDate": "10/04/2019", "endDate": "17/04/2019", "additionalNote": "Product iteration" }],
			"theme": "blue"
		},
		{
			"title": "web design",
			"timelines": [{ "startDate": "03/04/2019", "endDate": "15/04/2019", "additionalNote": "", "days": "12" }],
			"gaps": [],
			"theme": "orange"
		},
		{
			"title": "taxi-hailing",
			"timelines": [{ "startDate": "09/04/2019", "endDate": "17/04/2019", "additionalNote": "", "days": "8" }],
			"gaps": [],
			"theme": "green"
		},
		{
			"title": "illustrations",
			"timelines": [{ "startDate": "14/04/2019", "endDate": "24/04/2019", "additionalNote": "", "days": "10" }],
			"gaps": [],
			"theme": "skyblue"
		}
	];

  constructor() { }

  ngOnInit() {
  }

  calculateDayPatchWidth(team) {

	  for (var i = 0; i < team.timelines.length; i++) {
		  var start = team.timelines[i].startDate.substr(0, 2);
		  var end = team.timelines[i].endDate.substr(0, 2);
		  var a = (parseInt(start));
		  var startPoint = 0;
		  startPoint = ((a - 1) * 2.65) + 15;


		  var b = (parseInt(end));
		  var endPoint = ((b - 1) * 2.65) + 12.65;
		  var patchWidth = endPoint - startPoint;

		  team.timelines[i].startPoint = startPoint + "%";
		  team.timelines[i].patchWidth = patchWidth + "%";
	  }
	  return true;
  }

	calculateGapPatchWidth(team) {
		for (var i = 0; i < team.gaps.length; i++) {
			var start = team.gaps[i].startDate.substr(0, 2);
			var end = team.gaps[i].endDate.substr(0, 2);
			var a = (parseInt(start));
			var startPoint = 0;
			startPoint = ((a - 1) * 2.65) + 15;


			var b = (parseInt(end));
			var endPoint = ((b - 1) * 2.65) + 15;
			var patchWidth = endPoint - startPoint;

			team.gaps[i].startPoint = startPoint + "%";
			team.gaps[i].patchWidth = patchWidth + "%";
		}
		return true;
	}

}
