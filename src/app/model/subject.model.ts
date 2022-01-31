import {Result} from "./result.model";

export class Subject {

  public id:number=0;
  public userId:number=0;
  public subject:string='';
  public results: Result[]=[];


  constructor() {

  }

  /*constructor(idSubject:number, userId:number, subject:string, results: Result[]) {
    this.idSubject = idSubject;
    this.userId = userId;
    this.subject = subject;
    this.results = results;
  }**/
}
