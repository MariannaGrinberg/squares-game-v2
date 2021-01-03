import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  backgroundColor = this.getColor()

  constructor() { }

  ngOnInit(): void {}

   // getColor

   getColor() {

    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`

  }

  // setColor

  setColor() {

    this.backgroundColor = this.getColor()

  }

}
