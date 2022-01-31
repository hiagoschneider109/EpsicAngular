import {Subject} from "./subject.model";

export class User {

  public id:number=0;
  public name:string='';
  public password:string='';
  public subjects: Subject[]=[];

  /*constructor(name:string, subjects: Subject[]) {
    this.name = name;
    this.subjects = subjects;
  }**/

}
