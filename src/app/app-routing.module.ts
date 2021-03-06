import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student-attendance',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'student-attendance',
    loadChildren: () => import('./pages/student-attendance/student-attendance.module').then( m => m.StudentAttendancePageModule)
  },
  {
    path: 'teacher-attendance',
    loadChildren: () => import('./pages/teacher-attendance/teacher-attendance.module').then( m => m.TeacherAttendancePageModule)
  },
  {
    path: 'cch-attendance',
    loadChildren: () => import('./pages/cch-attendance/cch-attendance.module').then( m => m.CchAttendancePageModule)
  },
  {
    path: 'meal-management',
    loadChildren: () => import('./pages/meal-management/meal-management.module').then( m => m.MealManagementPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
