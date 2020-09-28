import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Pipe, PipeTransform } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user';

// public users ;
//   constructor( private userList : UserService ) { }

// ngOnInit(){
//    this.userList.getUser()
//    .subscribe(data =>  this.users = data);

// }

// userEmp(event) {
//   alert("Name selected :" + event.target.value);
// }

}


