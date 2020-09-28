import { AllusersService } from './allusers.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

import { Pipe, PipeTransform } from "@angular/core";
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users;
  form: FormGroup;
  constructor( private userList : AllusersService, private  router : Router, public fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    })
   }

   ngOnInit(){
  //  this.userList.getAllEvents()
  //  .subscribe(data =>  this.users = data);console.log(this.users);
}

// userEmp(event) {
//   alert("Name selected :" + event.target.value);
// }

submitForm() {
  console.log(this.form.value)
}

}


