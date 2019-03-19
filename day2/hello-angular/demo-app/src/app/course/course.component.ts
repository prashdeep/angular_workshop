import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

    course={
       name:"React",
       duration: 10,
       price:15000,
       instructor: "Kishore"
    }
  
}
