import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Course } from './models/course';
import { ServerCourse } from './models/server-course';
import { SpinnerService } from '../shared/shared';

@Injectable()
export class CourseService {
  private _description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  private _fakeResponseFromTheServer: ServerCourse[];

  constructor(private _spinnerService: SpinnerService) {
    this._initData();
  }

  public getList(): Observable<Course[]> {
    const currentDate = new Date();
    let freshDate = new Date();
    freshDate.setDate(currentDate.getDate() - 14);

    const courses = this._fakeResponseFromTheServer
      .filter((course) => course.courseCreatingDate >= freshDate)
      .map((courseSource) => this._mapServerCourse(courseSource));

    this._imitateWorkWithServer();

    return Observable.of(courses);
  }

  public get(id: string): Observable<Course> {
    const source = this._fakeResponseFromTheServer.find((c) => c.courseId === id);
    const course = this._mapServerCourse(source);

    this._imitateWorkWithServer();

    return Observable.of(course);
  }

  public create(course: Course): void {
    const serverCourse = this._mapClientCourse(course);

    this._imitateWorkWithServer();

    this._fakeResponseFromTheServer.push(serverCourse);
  }

  public update(id: string, course: Course): void {
    course.id = id;
    this.remove(id);
    this.create(course);
    this._fakeResponseFromTheServer = this._fakeResponseFromTheServer
      .sort((first, second) => first.courseId > second.courseId ? 1 : -1);
  }

  public remove(id: string): void {
    const index = this._fakeResponseFromTheServer.findIndex((c) => c.courseId === id);
    this._fakeResponseFromTheServer.splice(index, 1);
  }

  private _imitateWorkWithServer(): void {
    this._spinnerService.show();
    setTimeout(() => {
      this._spinnerService.hide();
    }, 500);
  }

  private _mapServerCourse(source: ServerCourse): Course {
    const course = {
      id: source.courseId,
      type: source.courseType,
      duration: source.courseDuration,
      date: source.courseCreatingDate,
      title: source.courseTitle,
      description: source.courseDescription,
      topRated: source.courseIsTopRated
    } as Course;

    return course;
  }

  private _mapClientCourse(source: Course): ServerCourse {
    const course = {
      courseId: source.id,
      courseType: source.type,
      courseDuration: source.duration,
      courseCreatingDate: source.date,
      courseTitle: source.title,
      courseDescription: source.description,
      courseIsTopRated: source.topRated
    } as ServerCourse;

    return course;
  }

  private _initData() {
        this._fakeResponseFromTheServer = [{
        courseId: '5',
        courseType: 'Webinar',
        courseDuration: 135,
        courseCreatingDate: new Date(2017, 5, 16, 12),
        courseTitle: 'Angular 2 vs ReactJS vs Vue.js',
        courseDescription: this._description,
        courseIsTopRated: true
      },
      { // outdated
        courseId: '1',
        courseType: 'Video',
        courseDuration: 55,
        courseCreatingDate: new Date(2017, 5, 1, 13, 30),
        courseTitle: 'Angular 2: Basics',
        courseDescription: this._description,
        courseIsTopRated: false
      }, {
        courseId: '2',
        courseType: 'Video',
        courseDuration: 235,
        courseCreatingDate: new Date(2017, 5, 7, 13, 30),
        courseTitle: 'Angular 2: Advanced',
        courseDescription: this._description,
        courseIsTopRated: true
      }, {
        courseId: '3',
        courseType: 'Webinar',
        courseDuration: 90,
        courseCreatingDate: new Date(2017, 5, 13, 13, 30),
        courseTitle: 'ReactJS: Intro',
        courseDescription: this._description,
        courseIsTopRated: false
      }, {
        courseId: '4',
        courseType: 'Webinar',
        courseDuration: 115,
        courseCreatingDate: new Date(2017, 5, 15, 12),
        courseTitle: 'Vue.js: Intro',
        courseDescription: this._description,
        courseIsTopRated: false
      }, {
        courseId: '6',
        courseType: 'Webinar',
        courseDuration: 115,
        courseCreatingDate: new Date(2017, 6, 15, 12),
        courseTitle: 'Ember.js: Intro',
        courseDescription: this._description,
        courseIsTopRated: false
      }, {
        courseId: '7',
        courseType: 'Webinar',
        courseDuration: 145,
        courseCreatingDate: new Date(2017, 6, 17, 12),
        courseTitle: 'Ember.js: Why is it better than React',
        courseDescription: this._description,
        courseIsTopRated: true
      }
    ];
  }
}
