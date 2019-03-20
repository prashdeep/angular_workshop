import { Injectable } from '@angular/core';
import { Course } from './Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  courses:Course[] = [
    {
      id:1,
     name:"React",
     duration: 10,
     price:15000,
     rating:5.677,
     startDate: new Date(2019,10,10),
     offer:true,
     instructor: "Kishore",
     imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id:2,
      name:"Java 8",
      duration: 8,
      price:10000,
      rating:3.4566,
      startDate: new Date(2019,12,10),
      offer:false,
      instructor: "Vinod",
      imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
     },
     {
       id:3,
      name:"Angular",
      duration: 10,
      price:18000,
      rating:6.675,
      startDate: new Date(2019,3,3),
      offer:false,
      instructor: "Vikas",
      imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

     },
     {
       id:4,
      name:"Spring Boot",
      duration: 10,
      price:25000,
      rating:4.4534,
      startDate: new Date(2019,8,10),
      offer:true,
      instructor: "Vishnu",
      imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

     },
     {
       id:5,
      name:"VueJs",
      duration: 10,
      price:15000,
      rating:5.444,
      startDate: new Date(2019,8,8),
      offer:true,
      instructor: "Aman",
      imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

     },
     {
       id:6,
      name:"Webpack",
      duration: 2,
      price:5000,
      rating:4.343,
      startDate: new Date(2019,5,5),
      offer:false,
      instructor: "Aman",
      imgSrc:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

     } 
];

  fetchAllCourses():Course[]{
   return this.courses
  }

  addCourse(course:Course){
    this.courses.push(course);
  }

  deleteCourse(courseName){
    console.log(courseName);  
    let index = this.courses.findIndex((course)=> course.name === courseName);
    this.courses.splice(index, 1);
  }
}
