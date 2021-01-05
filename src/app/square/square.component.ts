import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Output() colorChange = new EventEmitter<Object>()
  @Input() ArrayOfSquares = []

  static squares = 0; 
  id = ++SquareComponent.squares 
  // backgroundColor = this.getColor()

  backgroundColor = ''

  constructor() { }

  ngOnInit(): void {


    // this.emitSquare()

    this.initSquars()
    // setTimeout(()=>{  this.initSquars(),2000})

    // if (!this.color) {

      // this.backgroundColor = this.getColor()
      // this.emitSquare()

    // }

    // else {

      // setTimeout(()=>{} ,5000)

      // console.log(this.color)
      // // console.log(this.id)
      // this.backgroundColor = this.color.color

      

    // }

    // If Database Is Empty
      // Get Random Colors & Fill The Squares

    // Else
      // Get The Colors From The DB

    

  }

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
    this.emitSquare()
    console.log(this.ArrayOfSquares)
    // this.backgroundColor = this.color
  }

  initSquars(){

    // Get The Colors From The DB

    console.log(this.ArrayOfSquares)
    this.backgroundColor = this.ArrayOfSquares[this.id - 1].color


  }

  // emitSquare

  emitSquare() {
    this.colorChange.emit({ id: this.id, color: this.backgroundColor })

  }



}
