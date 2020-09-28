import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css'],
})
export class GetuserComponent implements OnInit {
  public userId;
  public user;
  public muser;
  constructor(
    private route: ActivatedRoute,
    private userList: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userId = id;
    this.user = this.userList.getUserDetail(this.userId);
    console.log(`You clicked id`, this.userId);
   console.log(`Hi`, this.user);
  }
}
