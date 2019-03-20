import { Component, OnInit } from '@angular/core';
import { Config } from '../Config';
import { Course } from '../Course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  availOffer:boolean = false;
  courses:Course[] = [];
  currencyCode = Config.currency;

  //Angular will add the dependency during creation of the component.
  constructor(
    private courseService:CourseService, 
    private router:Router){
  }
  ngOnInit(): void {
    this.courses = this.courseService.fetchAllCourses();
  }
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
    this.courseService.addCourse(course)
  }

  deleteCourse(courseName){
   this.courseService.deleteCourse(courseName);
  }

  handleOffer(){
    //console.log(`The checkbox status is ${status}`)
    this.courses.forEach(course => course.offer = this.availOffer);
  }

  handleSelectedCourse(selectedCourse:Course){
    console.log("Selected course is "+ selectedCourse.name);
    this.router.navigate([`/courses/${selectedCourse.id}`]);
  }
}
