import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent {
  constructor(private router:Router){}

  handleSubmit(formData){
    console.log('came inside the handle submit method');
    console.log(formData);
    // after successfull form submission redirect the user.
    //this.router.navigate(['']);

  }

}
