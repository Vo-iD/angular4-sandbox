import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Course } from './models/course';
import { ServerCourse } from './models/server-course';
import { SpinnerService, SafeObservableWrapper } from '../shared/shared';
import { Subject } from "rxjs/Subject";

@Injectable()
export class CourseService extends SafeObservableWrapper {
  // private _description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  //   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  //   ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  //   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  //   sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  //private _fakeResponseFromTheServer: ServerCourse[];

  constructor(private _spinnerService: SpinnerService, private _http: Http) {
    super();
  }

  public getList(countPerPage: number, page: number): Observable<Course[]> {
    const currentDate = new Date();
    let freshDate = new Date();
    freshDate.setDate(currentDate.getDate() - 14);
    const start = (page - 1) * countPerPage;

    let params: URLSearchParams = new URLSearchParams();
    params.set('start', start.toString());
    params.set('count', countPerPage.toString());
    const options = new RequestOptions();
    options.search = params;

    const courses: Subject<Course[]> = new Subject();
    this._http.get('courses', options)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        const coursesFromServer = response.json() as ServerCourse[];
        const mappedCourses = coursesFromServer.map(this._mapServerCourse);

        courses.next(mappedCourses);
      });

    return courses;
  }

  public get(id: string): Observable<Course> {
    const courses: Subject<Course> = new Subject();
    this._http.get('courses')
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        const courseFromServer = response.json();
        courses.next(this._mapServerCourse(courseFromServer));
      });

    return courses;
  }

  // public create(course: Course): void {
  //   const serverCourse = this._mapClientCourse(course);

  //   this._imitateWorkWithServer();

  //   this._fakeResponseFromTheServer = [...this._fakeResponseFromTheServer, serverCourse];
  // }

  // public update(id: string, course: Course): void {
  //   course.id = id;
  //   this.remove(id);
  //   this.create(course);
  //   this._fakeResponseFromTheServer = this._fakeResponseFromTheServer
  //     .sort((first, second) => first.courseId > second.courseId ? 1 : -1);
  // }

  // public remove(id: string): void {
  //   this._fakeResponseFromTheServer = [...this._fakeResponseFromTheServer
  //     .filter((c) => c.courseId !== id)];
  // }

  private _imitateWorkWithServer(): void {
    this._spinnerService.show();
    setTimeout(() => {
      this._spinnerService.hide();
    }, 500);
  }

  private _mapServerCourse(source: ServerCourse): Course {
    const course = {
      id: source.id,
      type: 'Video',
      duration: source.length,
      date: source.date,
      title: source.name,
      description: source.description,
      topRated: source.isTopRated
    } as Course;

    return course;
  }

  // private _initData() {
  //       this._fakeResponseFromTheServer = [{
  //       courseId: '5',
  //       courseType: 'Webinar',
  //       courseDuration: 135,
  //       courseCreatingDate: new Date(2017, 5, 16, 12),
  //       courseTitle: 'Angular 2 vs ReactJS vs Vue.js',
  //       courseDescription: this._description,
  //       courseIsTopRated: true
  //     },
  //     { // outdated
  //       courseId: '1',
  //       courseType: 'Video',
  //       courseDuration: 55,
  //       courseCreatingDate: new Date(2017, 5, 1, 13, 30),
  //       courseTitle: 'Angular 2: Basics',
  //       courseDescription: this._description,
  //       courseIsTopRated: false
  //     }, {
  //       courseId: '2',
  //       courseType: 'Video',
  //       courseDuration: 235,
  //       courseCreatingDate: new Date(2017, 5, 7, 13, 30),
  //       courseTitle: 'Angular 2: Advanced',
  //       courseDescription: this._description,
  //       courseIsTopRated: true
  //     }, {
  //       courseId: '3',
  //       courseType: 'Webinar',
  //       courseDuration: 90,
  //       courseCreatingDate: new Date(2017, 5, 13, 13, 30),
  //       courseTitle: 'ReactJS: Intro',
  //       courseDescription: this._description,
  //       courseIsTopRated: false
  //     }, {
  //       courseId: '4',
  //       courseType: 'Webinar',
  //       courseDuration: 115,
  //       courseCreatingDate: new Date(2017, 5, 15, 12),
  //       courseTitle: 'Vue.js: Intro',
  //       courseDescription: this._description,
  //       courseIsTopRated: false
  //     }, {
  //       courseId: '6',
  //       courseType: 'Webinar',
  //       courseDuration: 115,
  //       courseCreatingDate: new Date(2017, 6, 15, 12),
  //       courseTitle: 'Ember.js: Intro',
  //       courseDescription: this._description,
  //       courseIsTopRated: false
  //     }, {
  //       courseId: '7',
  //       courseType: 'Webinar',
  //       courseDuration: 145,
  //       courseCreatingDate: new Date(2017, 6, 17, 12),
  //       courseTitle: 'Ember.js: Why is it better than React',
  //       courseDescription: this._description,
  //       courseIsTopRated: true
  //     }
  //   ];
  // }
}
