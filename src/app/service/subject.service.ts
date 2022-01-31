import { Injectable } from '@angular/core';
import {Subject} from "../model/subject.model";
import { HttpClient} from "@angular/common/http";
import {Result} from "../model/result.model";
import {resolve} from "@angular/compiler-cli";
import {NgForm} from "@angular/forms";
import {AddSubjectDto} from "../model/add-subject-dto";
import {SubjectByUser} from "../model/subject-by-user";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }
  readonly baseUrl = 'http://localhost:5033/api/Subject'
  formData:Subject = new Subject();
  listSubj : Subject[];

  postSubject(subject: AddSubjectDto){
    return this.http.post(this.baseUrl, subject)
  }

  getSubjects(): Promise<Subject[]> {
    return new Promise<Subject[]>((resolve) => {
      this.http.get<Subject[]>(this.baseUrl).subscribe(
        (result: Subject[]) => {
          console.log(result);

          resolve(result);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  getSubjectByUserId(id:number){
    return new Promise<SubjectByUser[]>((resolve) => {
      this.http.get<SubjectByUser[]>(`${this.baseUrl}/user/${id}`).subscribe(
        (result: SubjectByUser[]) => {
          console.log(result);

          resolve(result);
        },
        (err) => {
          console.log(err)
        }
      );
    });

  }



  deleteSubject(id:number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


  refreshList(){
    this.http.get(this.baseUrl)
      .subscribe(res => this.listSubj = res as Subject[])
  }
}
