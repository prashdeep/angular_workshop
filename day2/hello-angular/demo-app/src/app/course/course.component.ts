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
       offer:true,
       instructor: "Kishore",
       imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      },
      {
        name:"Java 8",
        duration: 8,
        price:10000,
        offer:false,
        instructor: "Vinod",
        imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
       },
       {
        name:"Angular",
        duration: 10,
        price:18000,
        offer:false,
        instructor: "Vikas",
        imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

       },
       {
        name:"Spring Boot",
        duration: 10,
        price:25000,
        offer:true,
        instructor: "Vishnu",
        imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

       },
       {
        name:"VueJs",
        duration: 10,
        price:15000,
        offer:true,
        instructor: "Aman",
        imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

       },
       {
        name:"Webpack",
        duration: 2,
        price:5000,
        offer:false,
        instructor: "Aman",
        imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

       } 
  ]

  details(course){
    console.log(`came inside the details method.. ${course.name}`)
  }

  addCourse(courseName){
    let course:any = {};
    course.duration = 10;
    course.price = 5000;
    course.offer = false;
    course.instructor  ="John";
    course.name = courseName.value;

    this.courses.push(course);
  }

  deleteCourse(courseName){
    console.log(courseName);  
    let index = this.courses.findIndex((course)=> course.name === courseName);
    this.courses.splice(index, 1);
  }
  
}
