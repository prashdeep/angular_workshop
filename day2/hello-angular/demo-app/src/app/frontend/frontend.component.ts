import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('constructed the front end component..')

   }

   ngOnInit() {
    console.log('called from the on init method of frontend component')
  }

  ngOnDestroy(){
    console.log('called from the destroy method of frontend component')
  }

}
