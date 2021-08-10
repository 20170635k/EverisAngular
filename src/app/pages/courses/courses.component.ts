import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses=[]
  constructor(private _coursesService:CoursesService) { }

  ngOnInit(): void {
    this.courses=this._coursesService.courses
  }
  showcardpressed(eventTitle:string){
    console.log(eventTitle)
  }
}
