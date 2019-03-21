import { Route } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { DetailsComponent } from './details/details.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { FormsComponent } from './forms/forms.component';
import { TformComponent } from './tform/tform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes:Route[]=[
  {
      'path':'',
      redirectTo:'courses',
      pathMatch:'full'
  },
  {
    'path':'courses',
    component:CourseComponent,
    children:[
        {
            path:'',
            component:BackendComponent
            
        },
        {
            path:'backend',
            component:BackendComponent
        },
        {
            path:'frontend',
            component:FrontendComponent
        }
    ]
  },
  {
      path:'events',
      component:EventBindingComponent
  },
  {
      path:"two-way",
      component:TwoWayBindingComponent
  },
  {
      path:'footer',
      component:FooterComponent
  },
  {
      path:'courses/:id',
      component:DetailsComponent  
  },
  {
    path:'data-sharing',
    component:DataSharingComponent  
   } ,
   {
    path:'forms',
    component:FormsComponent,
    children:[
        {
            path:'',
            component:TformComponent
        },
        {
            path:'template',
            component:TformComponent
        },
        {
            path:'reactive',
            component:ReactiveFormComponent
        }
    ]
   } ,
   {
    path:'users',
    component:UsersComponent  
   } ,
   {
    path:'users/:id',
    component:UserDetailsComponent  
   } ,
  {
      path:'**',
      component:NotFoundComponent
  }
]