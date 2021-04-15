import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {

  constructor(private _http: HttpClient) {} 

    getCourses(params?) {
      return this._http.get(`${environment.baseUrl}/courses`, { params });
    }

    addCourse(course) {
      return this._http.post(`${environment.baseUrl}/courses`, course);
    }


  
}
