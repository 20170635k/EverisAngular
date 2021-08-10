import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CourseComponent } from './pages/courses/course/course.component'
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PipesclassComponent } from './pages/pipesclass/pipesclass.component';
import { TestPipe } from './pipes/test.pipe';
import { TextReducerPipe } from './pipes/text-reducer.pipe';
import { ObservableComponent } from './pages/observable/observable.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    AboutComponent,
    CourseComponent,
    PipesclassComponent,
    TestPipe,
    TextReducerPipe,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
