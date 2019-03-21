import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log('constructed the backend component..')
  }

  ngOnInit() {
    console.log('called from the on init method of backend component')
  }

  ngOnDestroy(){
    console.log('called from the destroy method of backend component')
  }
}
