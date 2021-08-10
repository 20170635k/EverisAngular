import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }
  tiempo=0
  items=[]
  timer:Observable<number>

  ngOnInit(): void {
    this.timer= interval(1000).pipe(filter(val => val % 2 === 0))
    this.timer.subscribe(value=>{
      this.tiempo=value
      this.items.push(value)
      console.log(value)
    })
  }

}
