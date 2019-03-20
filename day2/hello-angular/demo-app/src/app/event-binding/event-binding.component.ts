import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
     <div>
       <h1>Inline HTML markup</h1>
        <input type="text" (keyup.enter)="handleChange($event)" placeholder="using standard dom">
        <input type="text" #inputValue (keyup.enter)="handleChange (inputValue)" placeholder="using template variable">

        <button  (click)="handleClick()" class='btn btn-primary'>Click Me</button>
     </div>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  /*handleChange($event){
    console.log('Inside the handle change event');
    console.log($event.target.value);
  }*/
  //using template variable
  handleChange(variable){
    console.log('Inside the handle change event');
    console.log(variable.value);
  }

  handleClick(){
    console.log('clicked event');
  }


}
