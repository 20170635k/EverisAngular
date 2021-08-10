import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit,OnChanges {
  @Input('number') sessionNumber:number
  @Input() title:string
  @Output() onCourseClick= new EventEmitter<string>()
  constructor() {
    this.sessionNumber=0
  }

  clickCourseEmit(){
    this.onCourseClick.emit(this.title)
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log("from onchanges()")
  }

}
