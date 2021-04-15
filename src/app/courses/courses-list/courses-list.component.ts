import { Component, OnInit } from '@angular/core';
import { GetCoursesService } from '../get-courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  coursesList: any[]=[];
  constructor(private _GetCoursesService: GetCoursesService) { }

  ngOnInit(): void {
    this._GetCoursesService.getCourses().subscribe((res: any) => {
      this.coursesList = res.data;
    });
  }

}
