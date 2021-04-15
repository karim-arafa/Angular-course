import { Component, OnInit } from '@angular/core';
import { GetCoursesService } from '../get-courses.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  errors = [];

  courseForm: FormGroup = this._fb.group({
    title: ['', Validators.required],
    instructor: ['', Validators.required],
    isAvailabel: [false]
  });

  constructor(
    private _fb: FormBuilder,
    private _coursesService: GetCoursesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const course = form.value;
      this._coursesService.addCourse(course).subscribe(
        (res: any) => {
          this.errors = [];
          console.log(res);
          this._router.navigate(['/courses', res.data.id]);
        },
        (err: any) => {
          console.log(err);
          this.errors = err.error.error || [];
        }
      )
    }

  }

}
