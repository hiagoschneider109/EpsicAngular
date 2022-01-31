import {Result} from "./result.model";

export class SubjectByUser {

  public id:number=0;
  public userId:number=0;
  public subject:string='';
  public results: Result[]=[];

  constructor() {

  }
}
