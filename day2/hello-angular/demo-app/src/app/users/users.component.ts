import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   users:User[];
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.fetchAllUsers().subscribe((response)=>{
      console.log(' this is the response from the service');
      console.log (response);
      this.users = response;
    })

  }

}
