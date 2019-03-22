import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {
  dataService;
  constructor( dataService:DataService) { }

  ngOnInit() {
  }

  increment(){
    this.dataService.inc();
  }

}
