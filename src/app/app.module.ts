import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TeamsNavComponent } from './teams-nav/teams-nav.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { LeftMainMenuComponent } from './left-main-menu/left-main-menu.component';
import { LeftSkillsMenuComponent } from './left-skills-menu/left-skills-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { TbdComponent } from './tbd/tbd.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LeftNavComponent,
    TeamsNavComponent,
    CalendarComponent,
    HomeComponent,
    LeftMainMenuComponent,
    LeftSkillsMenuComponent,
    TbdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule, MatInputModule, MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
