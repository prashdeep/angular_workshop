import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

    courses=[
      {
       name:"React",
       duration: 10,
       price:15000,
       instructor: "Kishore"
      },
      {
        name:"Java 8",
        duration: 8,
        price:10000,
        instructor: "Vinod"
       },
       {
        name:"Angular",
        duration: 10,
        price:18000,
        instructor: "Vikas"
       },
       {
        name:"Spring Boot",
        duration: 10,
        price:25000,
        instructor: "Vishnu"
       },
       {
        name:"VueJs",
        duration: 10,
        price:15000,
        instructor: "Aman"
       },
       {
        name:"Webpack",
        duration: 2,
        price:5000,
        instructor: "Aman"
       } 
  ]

  details(course){
    console.log(`came inside the details method.. ${course.name}`)
  }
  
}
