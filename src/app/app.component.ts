import { Component } from '@angular/core';
import { FirestoreService} from './firestore.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  squares = []

  // On Componnet Init Read DB Content

  ngOnInit(): void {

    this.readFromDB()

  }

  // C'tor

  constructor(private firestore: FirestoreService){}


  // Call Firbase Service
  onChange(square: Object){

    this.firestore.save(square)
    this.readFromDB()

  }

  // Read Squares from Firebabse DB Services

  readFromDB(){

    this.firestore.exampleGetCollection().subscribe((squares)=>{
     
      this.squares = squares

    })

  }

}

