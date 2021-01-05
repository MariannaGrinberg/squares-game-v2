import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { pluck, map } from 'rxjs/operators';

interface square {
  [index: number]: { color: string; }[]
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private firestore: AngularFirestore) {}

  save(square: Object){ 
    // let data = {color, id}

    return new Promise<any>((resolve, reject) => { 
       this.firestore
           .collection("collectionNameHere").doc(square.id + '').set({color: square.color})
          //  .add(square)
           .then(
               res => {}, 
               err => reject(err)
           )
    })}

    exampleGetCollection(){ 
      return this.firestore
            .collection<square>("collectionNameHere")
             .valueChanges()

  }
    
}
