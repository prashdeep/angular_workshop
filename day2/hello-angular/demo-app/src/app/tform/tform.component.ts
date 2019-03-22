import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent {
  constructor(private router:Router, private userservice:UsersService ){}

  message:string;

  handleSubmit(formData){
    console.log('came inside the handle submit method');
    let user:User = new User("Vinay","vinay.kumar", "vinay@gmail.com");
    this.userservice.saveUser(user).subscribe(response=>{
      console.log('Response from the service ..');
      console.log(response);
      
    })

  }

}
