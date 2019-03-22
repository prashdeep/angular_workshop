import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   courseId:number;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.courseId = +this.activatedRoute.snapshot.paramMap.get("id");
    console.log(`The course id is ${this.courseId}`);
  }

}
