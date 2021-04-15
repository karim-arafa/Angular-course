import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseFormComponent } from '../course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  
  {
    path: 'new',
    component: CourseFormComponent
  },
  {
    path: '**',
    component: CoursesComponent
  }
];


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }