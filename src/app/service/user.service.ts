import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {Subject} from "../model/subject.model";
import {AddUserDto} from "../model/add-user-dto.model";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  readonly baseURL = 'http://localhost:5033/api/user';
  //formData:AddUserDto = new AddUserDto();
  listUser: User[];


  getUserApi(){
    return this.http.get('http://localhost:5033/api/user')
  }

  getUsers() : Promise<User[]> {
    return new Promise<User[]>((resolve) => {
      this.http.get<User[]>(this.baseURL).subscribe(
        (result:User[]) => {
          console.log(result);

          resolve(result);

        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  postUser (user: AddUserDto){
    return this.http.post(this.baseURL, user);
  }


  updateUser(id:number, data:any): Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, data);
  }
  /*createUser(usr: any): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.http
        .post(this.baseURL, usr, {responseType: "text"})
        .subscribe((data) => {
          console.log(data);

          resolve(true);
        });
    });
  }**/

  deleteUser(id:number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
      .subscribe(res => this.listUser = res as User[])
  }
}
