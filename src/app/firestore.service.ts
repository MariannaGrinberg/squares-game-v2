import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// Square Interface

interface square {
  [index: number]: { color: string; }[]
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private firestore: AngularFirestore) {}

  // Set Square Color On Given Square ID 

  save(square: Object){ 
    return new Promise<any>((resolve, reject) => { 
       this.firestore
           .collection("Squares").doc(square.id + '').set({color: square.color})
           .then(
               res => {}, 
               err => reject(err)
           )
    })
  }

  // Get from firebase db collection and send it to app module as observable
    exampleGetCollection(){ 
      return this.firestore
            .collection<square>("Squares")
             .valueChanges()

  }
    
}
