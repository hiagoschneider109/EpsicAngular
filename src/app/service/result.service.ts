import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Result} from "../model/result.model";
import {AddSubjectDto} from "../model/add-subject-dto";
import {AddResultDto} from "../model/add-result-dto";


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient) { }
  readonly baseUrl = 'http://localhost:5033/api/Result'

  getResults(): Promise<Result[]> {
    return new Promise<Result[]>((resolve) => {
      this.http.get<Result[]>(this.baseUrl).subscribe(
        (result: Result[]) => {
          console.log(result);

          resolve(result);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  getResultBySubjectId(id:number): Promise<Result[]> {
    return new Promise<Result[]>((resolve) => {
      this.http.get<Result[]>(`${this.baseUrl}/subject/${id}`).subscribe(
        (result: Result[]) => {
          console.log(result);

          resolve(result);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  postResult(result: AddResultDto){
    return this.http.post(this.baseUrl, result);
  }

  deleteResult(id:number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
