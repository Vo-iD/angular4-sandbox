import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Course } from './models/course';
import { ServerCourse } from './models/server-course';
import { SpinnerService, SafeObservableWrapper } from '../shared/shared';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CourseService extends SafeObservableWrapper {
  constructor(private _http: Http) {
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
        const coursesFromServer = response.json();
        courses.next(this._mapServerCourse(coursesFromServer[0]));
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

  public create(course: Course): Observable<string> {
    const options = new RequestOptions();
    const serverModel = this._mapToServerCourse(course);
    options.body = serverModel;

    const createResult: Subject<string> = new Subject();

    this._http.post(`courses`, options)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        const courseId = response.json();
        console.log(`Course ${courseId} updated successfully.`);

        createResult.next(courseId);
      });

    return createResult;
  }

  public update(id: string, course: Course): Observable<boolean> {
    const options = new RequestOptions();
    const serverModel = this._mapToServerCourse(course);
    options.body = serverModel;

    const updateResult: Subject<boolean> = new Subject();

    this._http.put(`courses/${id}`, options)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        const result = response.json();
        if (result) {
          console.log(`Course ${id} updated successfully.`);
        } else {
          console.error('Something wrong with deleting...');
          console.error(response);
        }

        updateResult.next(result);
      });

    return updateResult;
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

  private _mapServerCourse(source: ServerCourse): Course {
    const course = {
      id: source.id,
      type: 'Video',
      duration: source.length,
      date: source.date,
      title: source.name,
      description: source.description,
      topRated: source.isTopRated,
      authors: source.authors
    } as Course;

    return course;
  }

  private _mapToServerCourse(source: Course): ServerCourse {
    const course = {
      id: source.id,
      length: source.duration,
      date: source.date,
      name: source.title,
      description: source.description,
      authors: source.authors
    } as ServerCourse;

    return course;
  }
}
