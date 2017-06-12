import { Injectable } from '@angular/core';
import { Course } from './models/course';

@Injectable()
export class CourseService {
  private _courses: Course[];

  constructor() {
    this._courses = [{
        id: '1',
        type: 'Video',
        duration: 180,
        date: new Date(2017, 7, 1, 13, 30),
        description: 'Angular 2: Basics'
      }, {
        id: '2',
        type: 'Video',
        duration: 240,
        date: new Date(2017, 7, 7, 13, 30),
        description: 'Angular 2: Advanced'
      }, {
        id: '3',
        type: 'Webinar',
        duration: 120,
        date: new Date(2017, 7, 13, 13, 30),
        description: 'ReactJS: Intro'
      }, {
        id: '4',
        type: 'Webinar',
        duration: 120,
        date: new Date(2017, 7, 15, 12),
        description: 'Vue.js: Intro'
      }, {
        id: '5',
        type: 'Webinar',
        duration: 120,
        date: new Date(2017, 7, 16, 12),
        description: 'Angular 2 vs ReactJS vs Vue.js'
      }
    ];
  }

  public getList(): Course[] {
    return this._courses;
  }

  public getCourse(id: string): Course {
    return this._courses.find((c) => c.id === id);
  }
}
