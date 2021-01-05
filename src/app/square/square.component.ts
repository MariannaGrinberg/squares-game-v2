import { SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

export class SquareComponent {

  @Output() colorChange = new EventEmitter<Object>()
  @Input() ArrayOfSquares = []

  // Generate Square ID.
  
  static squares = 0; 
  id = ++SquareComponent.squares 

  backgroundColor = ''

  // C'tor

  constructor() { }

  // On value change

  ngOnChanges(changes: SimpleChanges) {
    
    this.backgroundColor = changes.ArrayOfSquares.currentValue[this.id -1].color
    
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
    
  }

  // emitSquare

  emitSquare = () => {
    
    this.colorChange.emit({ id: this.id, color: this.backgroundColor })

  }



}
