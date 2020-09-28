import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css'],
})
export class AllusersComponent implements OnInit {
  public users;
  public usersname;
  constructor(private userList: UserService, private router: Router) {}
  ngOnInit() {
    this.userList.getUser().subscribe((data) => (this.users = data));
  }
  userEmp(event) {
    alert('Name selected :' + event.target.value);
  }
  onSubmit(alluser) {
    console.log(alluser.data.id);
  }
}
