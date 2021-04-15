import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseFormComponent } from '../course-form/course-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

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
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CoursesModule { }