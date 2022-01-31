import { Component, OnInit } from '@angular/core';
import {Result} from "../model/result.model";
import {ResultService} from "../service/result.service";
import {SubjectService} from "../service/subject.service";
import {Subject} from "../model/subject.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  results: Result[];
  resultsBySubjectId: Result[];
  subjects: Subject[];
  subjectId:number=0;
  serviceResult: ResultService;
  serviceSubj: SubjectService;

  constructor(serviceResult: ResultService, serviceSubj: SubjectService) {
    this.serviceResult = serviceResult;
    this.serviceSubj = serviceSubj;
  }

  ngOnInit(): void {
    this.serviceResult.getResults()
      .then((s) => (this.results = s));
    this.serviceSubj.getSubjects()
      .then((s) => (this.subjects = s));
  }

  public selectedSubject(event:any){
    this.subjectId = event.value;

    console.log(this.subjectId);
    this.serviceResult.getResultBySubjectId(this.subjectId)
      .then((s) => (this.resultsBySubjectId = s))
      .then(s => console.log(s));

  }

  onDelete(id:number){
    this.serviceResult.deleteResult(id)
      .subscribe(
        res => {
          this.refreshPage();
        },
        err => {
          console.log(err)
        }
      )
  }

  refreshPage(){
    window.location.reload();
  }

}
