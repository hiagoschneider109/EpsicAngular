import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SubjectComponent} from "./subject/subject.component";
import {UserComponent} from "./user/user.component";
import {UserListComponent} from "./user-list/user-list.component";
import {ResultComponent} from "./result/result.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subject', component: SubjectComponent},
  { path: 'user-list', component: UserListComponent},
  { path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
