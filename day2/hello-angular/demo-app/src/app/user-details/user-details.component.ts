import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../model/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

   user:User;
  private handle:Subscription;
  constructor(private router:ActivatedRoute, private userService:UsersService) { }

  ngOnInit() {
    let id:number = +this.router.snapshot.paramMap.get('id');
    this.handle = this.userService.fetchUserById(id).subscribe(response=>{
      this.user = response;
    }, (error)=>{
      console.log('There was an error getting the data...')
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.handle.unsubscribe();
  }

}
