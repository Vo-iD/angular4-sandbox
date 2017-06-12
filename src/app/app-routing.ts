import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent, CourseDetailsComponent } from './course/courses';

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
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
