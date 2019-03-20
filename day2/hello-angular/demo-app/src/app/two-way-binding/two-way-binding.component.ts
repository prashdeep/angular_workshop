import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
     <div>
     <input type="text" [(ngModel)]="propName" placeholder="enter your name">
     </div>
     <div style="margin-top:20px">
       <span class="alert alert-success">{{propName}}</span>
     </div>
  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent{

   propName = "Hello Angular !!"
}
