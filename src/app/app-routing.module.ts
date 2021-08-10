import { PipesclassComponent } from './pages/pipesclass/pipesclass.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './pages/observable/observable.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"courses",
    component:CoursesComponent
  },{
    path:"observable",
    component:ObservableComponent
  },{
    path:"pipes",
    component:PipesclassComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
