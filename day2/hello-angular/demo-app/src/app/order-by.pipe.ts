import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './Course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[], args: boolean): any {
  
    let orderedCourses = courses.sort(
      (courseA, courseB)=> courseA.price - courseB.price
    );
    if (!args){
      orderedCourses.reverse();
    }
    return orderedCourses;
  }

}
