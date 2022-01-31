import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../service/subject.service";
import {Subject} from "../model/subject.model";
import {User} from "../model/user.model";
import {UserService} from "../service/user.service";
import {SubjectByUser} from "../model/subject-by-user";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: Subject[];
  subjectsByUserId: SubjectByUser[];
  users: User[];
  userId:number=0;
  value:any;
  moyenne:number=0;
  serviceSubj: SubjectService;
  serviceUser: UserService;
  constructor(serviceSubj: SubjectService, serviceUser: UserService) {
    this.serviceSubj = serviceSubj;
    this.serviceUser = serviceUser;
  }

  ngOnInit(): void {
    this.serviceSubj.getSubjects()
      .then((s) => (this.subjects = s)).then(s => console.log(s));
    this.serviceUser.getUsers()
      .then((u) => (this.users = u)).then(u => console.log(u));

  }

  public selectedUser(event:any){
    this.userId = event.value;

    console.log(this.userId);
    this.serviceSubj.getSubjectByUserId(this.userId)
      .then((s) => (this.subjectsByUserId = s))
      .then(s => console.log(s));


    this.subjects.forEach( e => console.log("Avant :" + e.subject));


    this.subjects.forEach(e => console.log("Apres: " + e.subject));



  }

  refreshList(){
    window.location.reload();
  }

  onDelete(id:number){
    this.serviceSubj.deleteSubject(id)
      .subscribe(
        res => {
          this.refreshList();
        },
        err => {
          console.log(err)
        }
      )
  }
}
