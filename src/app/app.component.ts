import { Component } from '@angular/core';
import { FirestoreService} from './firestore.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private firestore: FirestoreService){}

  onChange(rgb: string){

    this.firestore.exampleCreate(rgb)
  }
}
