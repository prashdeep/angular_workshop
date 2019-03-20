import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent{
  @Input() course:Course
  @Output() selected = new EventEmitter();
  

  courseSelected(course){
    this.selected.emit(course);
  }
}
