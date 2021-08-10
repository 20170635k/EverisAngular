import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name:string
  surname:string

  bfamily:boolean=false
  bstyle:boolean=false
  bcolor:boolean=false

  currentarray:any[]
  currentstring:string
  currentobject:Record<string,boolean>={}

  especialstylecolor={'background':'red'}
  especialstylefamily={'font-style':'italic'}
  especialstylestyle={'font-weight':'bold'}




  changebcolor(){

    this.bcolor=!this.bcolor

    this.currentobject={
      ...this.currentobject,
      "-recd":this.bcolor
    }

    this.especialstylecolor=this.bcolor?{'background':'white'}:{'background':'red'}
  }

  changebfamily(){
    this.bfamily=!this.bfamily
    this.currentobject={
      ...this.currentobject,
      "font-cursive":this.bfamily
    }

    this.especialstylefamily=this.bcolor?{'font-style':'initial'}:{'font-style':'italic'}
  }

  changebstyle(){
    this.bstyle=!this.bstyle
    this.currentobject={
      ...this.currentobject,
      "font-bold":this.bstyle
    }

    this.especialstylestyle=this.bcolor?{'font-weight':'initial'}:{'font-weight':'bold'}
  }



  constructor() { }

  ngOnInit(): void {
    this.currentobject={
      "font-cursive":this.bfamily,
      "font-bold":this.bstyle,
      "c-red":this.bcolor
    }



  }




}
