import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TbdComponent } from './tbd/tbd.component'


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'tbd', component: TbdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
