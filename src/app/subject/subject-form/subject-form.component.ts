import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../service/subject.service";
import {NgForm} from "@angular/forms";
import {Subject} from "../../model/subject.model";
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";
import {AddSubjectDto} from "../../model/add-subject-dto";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {


  users:User[];
  subjectModel = new AddSubjectDto();
  userId:number=0;

  constructor(public service:SubjectService, public servUser:UserService, public toastr:ToastrService) { }

  ngOnInit(): void {
    this.servUser.getUsers().then((users) => (this.users = users))
  }

  onSubmit(){
    this.subjectModel.userId = this.userId;
    console.log(this.subjectModel);
    this.service.postSubject(this.subjectModel).subscribe(
      res =>{
        window.location.reload();
        this.toastr.success('Submitted successfully','Subject Register');

      },
      err => { console.log(err);}
    );

  }


  public selectedUser(event:any){
    this.userId = event.value;
    console.log(this.userId)

  }


}
