import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { ChildOneComponent } from './child-one/child-one.component';

@NgModule({
  declarations: [Comp1Component, ChildOneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'user',children:[
          {
            path:'',
            component:ChildOneComponent
          },{
            path:'comp1',
            component:Comp1Component
          }
        ]
      }
    ])
  ],
  exports:[
    RouterModule,
  ]
})
export class ModuleOneModule { }
