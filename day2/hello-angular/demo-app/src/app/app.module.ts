import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { OrderByPipe } from './order-by.pipe';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './AppRoutes';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { TformComponent } from './tform/tform.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    OrderByPipe,
    IfDirectiveComponent,
    CourseDetailsComponent,
    NotFoundComponent,
    DetailsComponent,
    BackendComponent,
    FrontendComponent,
    CompOneComponent,
    CompTwoComponent,
    DataSharingComponent,
    TformComponent,
    FormsComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
