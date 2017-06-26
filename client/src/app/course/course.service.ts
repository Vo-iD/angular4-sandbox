import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Course } from './models/course';
import { ServerCourse } from './models/server-course';
import { SpinnerService, SafeObservableWrapper } from '../shared/shared';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CourseService extends SafeObservableWrapper {
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
    let params: URLSearchParams = new URLSearchParams();
    params.set('query', `id:${id}`);
    const options = new RequestOptions();
    options.search = params;

    this._http.get('courses', options)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        const courseFromServer = response.json();
        courses.next(this._mapServerCourse(courseFromServer));
      });

    return courses;
  }

  public search(term: string): Observable<Course[]> {
    const courses: Subject<Course[]> = new Subject();
    let params: URLSearchParams = new URLSearchParams();
    params.set('query', `name:${term}_description:${term}`);
    const options = new RequestOptions();
    options.search = params;

    this._http.get('courses', options)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        const coursesFromServer = response.json() as ServerCourse[];
        const mappedCourses = coursesFromServer.map(this._mapServerCourse);

        courses.next(mappedCourses);
      });

    return courses;
  }

  public create(course: Course): void {
    throw Error('Not implemented');
  }

  public update(id: string, course: Course): void {
    throw Error('Not implemented');
  }

   public remove(id: string): Observable<boolean> {
    const removeResult: Subject<boolean> = new Subject();

    this._http.delete(`courses/${id}`)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        const result = response.json();
        if (result) {
          console.log(`Course ${id} removed successfully.`);
        } else {
          console.error('Something wrong with deleting...');
          console.error(response);
        }

        removeResult.next(result);
      });

    return removeResult;
   }

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
}
