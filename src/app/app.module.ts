import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import {SubjectComponent} from "./subject/subject.component";
import {HttpClientModule} from "@angular/common/http";
import {SubjectFormComponent} from "./subject/subject-form/subject-form.component";
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ResultComponent } from './result/result.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { ResultFormComponent } from './result/result-form/result-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    SubjectFormComponent,
    NavMenuComponent,
    HomeComponent,
    UserComponent,
    UserListComponent,
    ResultComponent,
    UserFormComponent,
    ResultFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
