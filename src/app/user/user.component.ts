import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  users: User[];

  serviceUser: UserService;
  constructor(serviceUser: UserService) {
    this.serviceUser = serviceUser;
  }

  async ngOnInit() {
    this.serviceUser.getUsers()
      .then((u) => (this.users = u)).then(u => console.log(u));

  }

  /*updateForm(selectedRecord:User){
    this.serviceUser.
  }**/

  onDelete(id:number){
    this.serviceUser.deleteUser(id)
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
