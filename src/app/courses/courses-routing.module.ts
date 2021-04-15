import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCourseComponent } from './add-course/add-course.component';



const routes: Routes = [{
  path: '', component: CoursesComponent,
  children: [
    {
      path: '', component: CoursesListComponent
    },
    {
      path: 'new', component: AddCourseComponent,
     
    },
    {
      path: ':id', component: CoursesListComponent
    }
  ]
},

{
  path: '**', redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
