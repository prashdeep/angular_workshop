import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent  {

  constructor(private dataService:DataService) {
   }

   decrement(){
     this.dataService.dec();
   }

}
