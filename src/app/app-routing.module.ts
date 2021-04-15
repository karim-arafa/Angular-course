import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoPreloading, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'user',
    component: UserComponent
  },

  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy:  PreloadAllModules
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
