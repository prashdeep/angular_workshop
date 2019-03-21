import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent {

  handleSubmit(formData){
    console.log('came inside the handle submit method');
    console.log(formData);
  }

}
