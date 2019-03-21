import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  
  users = [];

  constructor(){
    console.log('inside the constructor of App component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(`called inside the onchanges of app component`);
    console.log(changes);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(`came inside the on init method of app component`)
   
  }

  addUser(){
    this.users.push({id:Math.random()* 1000});
    //this.users = this.users.concat({id:Math.random()* 1000});
  }
}
