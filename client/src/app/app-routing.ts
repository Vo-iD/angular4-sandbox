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
    component: CoursesListComponent,
    data: {
      breadcrumb: 'Courses'
    }
  },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent,
    data: {
      breadcrumb: 'Course Details'
    }
  },
  {
    path: 'newCourse',
    component: AddCourseComponent,
    data: {
      breadcrumb: 'New Course'
    }
  },
  {
    path: 'courses/:id/edit',
    component: EditCourseComponent,
    data: {
      breadcrumb: 'Edit Course'
    }
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      breadcrumb: 'Login'
    }
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
