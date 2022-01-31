import { Component, OnInit } from '@angular/core';
import {ResultService} from "../../service/result.service";
import {SubjectService} from "../../service/subject.service";
import {User} from "../../model/user.model";
import {AddSubjectDto} from "../../model/add-subject-dto";
import {Subject} from "../../model/subject.model";
import {AddResultDto} from "../../model/add-result-dto";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.css']
})
export class ResultFormComponent implements OnInit {

  subjects:Subject[];
  resultModel = new AddResultDto();
  subjectId:number=0;
  constructor(public serviceResult: ResultService, public serviceSubject: SubjectService, public toastr:ToastrService) { }

  ngOnInit(): void {
    this.serviceSubject.getSubjects()
      .then((s) => (this.subjects = s))
  }

  onSubmit(){
    this.resultModel.subjectId = this.subjectId;
    console.log(this.resultModel);
    this.serviceResult.postResult(this.resultModel).subscribe(
      res =>{

        window.location.reload();
        this.toastr.success('Submitted successfully','Result Register')


      },
      err => { console.log(err);}
    );

  }

  public selectedSubject(event:any){
    this.subjectId = event.value;
    console.log(this.subjectId)

  }

}
