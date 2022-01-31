import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {User} from "../../model/user.model";
import {AddUserDto} from "../../model/add-user-dto.model";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  userModel = new AddUserDto();
  constructor(public serviceUser:UserService, private toastr:ToastrService) {

  }

  ngOnInit(): void {
    this.serviceUser.refreshList();
  }

  onSubmit(){

    console.log(this.userModel);
    this.serviceUser.postUser(this.userModel).subscribe(
      res => {
      this.refreshPage();
      this.toastr.success('Submitted successdully','User Register')
      },
      err => {
        console.log(err);
    }
    );
  }

  refreshPage(){
    window.location.reload();
  }



}
