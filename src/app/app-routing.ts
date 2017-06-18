import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CoursesListComponent,
  CourseDetailsComponent,
  EditCourseComponent,
  AddCourseComponent
} from './course/courses';
import { LoginPageComponent } from './auth/auth';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursesListComponent
  },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'newCourse',
    component: AddCourseComponent
  },
  {
    path: 'courses/:id/edit',
    component: EditCourseComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
