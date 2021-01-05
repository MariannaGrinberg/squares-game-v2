import { Component } from '@angular/core';
import { FirestoreService} from './firestore.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  squares = []

  ngOnInit(): void {

    this.readFromDB()
  }


  constructor(private firestore: FirestoreService){}

  onChange(square: Object){

    this.firestore.save(square)
    this.firestore.exampleGetCollection().subscribe((squares)=>{
    this.squares = squares
      // console.log(squares)
    })
    
    //  setTimeout(()=>{},2000)
  }

  readFromDB(){

    this.firestore.exampleGetCollection().subscribe((squares)=>{
      this.squares = squares

    })

  }

}

