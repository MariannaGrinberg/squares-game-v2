import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private firestore: AngularFirestore) {}

  exampleCreate(data: string){ 
    let color = {data}
    return new Promise<any>((resolve, reject) => { 
       this.firestore
           .collection("collectionNameHere")
           .add(color)
           .then(
               res => {}, 
               err => reject(err)
           )
    })}
}
