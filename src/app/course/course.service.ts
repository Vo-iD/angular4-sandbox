import { Injectable } from '@angular/core';
import { Course } from './models/course';

@Injectable()
export class CourseService {
  private _description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  private _courses: Course[];

  constructor() {
    this._courses = this._courses = [{
        id: '1',
        type: 'Video',
        duration: 55,
        creatingDate: new Date(2017, 5, 1, 13, 30),
        title: 'Angular 2: Basics',
        description: this._description
      }, {
        id: '2',
        type: 'Video',
        duration: 235,
        creatingDate: new Date(2017, 5, 7, 13, 30),
        title: 'Angular 2: Advanced',
        description: this._description
      }, {
        id: '3',
        type: 'Webinar',
        duration: 90,
        creatingDate: new Date(2017, 5, 13, 13, 30),
        title: 'ReactJS: Intro',
        description: this._description
      }, {
        id: '4',
        type: 'Webinar',
        duration: 115,
        creatingDate: new Date(2017, 5, 15, 12),
        title: 'Vue.js: Intro',
        description: this._description
      }, {
        id: '5',
        type: 'Webinar',
        duration: 135,
        creatingDate: new Date(2017, 5, 16, 12),
        title: 'Angular 2 vs ReactJS vs Vue.js',
        description: this._description
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
