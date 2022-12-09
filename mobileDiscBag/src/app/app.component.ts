import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

export interface DiscDoc {
  name: string;
  brand: string;
  flightNumber: number;
  desc: string;
  // img: ref;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Discdex'

  public name = '';
  public brand = '';
  public flightNumber = 0;
  public desc = '';

  discArray: DiscDoc[] = [];

  constructor(private firestore: AngularFirestore) {
    this.getDiscs().subscribe((result) => (this.discArray = result));
  }

  getDiscs(): Observable<DiscDoc[]> {
    return this.firestore
      .collection<DiscDoc>('disc', (ref) => ref.orderBy('flightNumber'))
      .valueChanges();
  }

  // constructor(private db: AngularFirestore) {
  //   // db is from firestore, discdoc is the interface, path takes to data in database, values changes gives types back
  //   //

  //   db.doc<DiscDoc>('/test/test').valueChanges().subscribe( result => {
  //     if (result) {
  //       this.name = result.name;
  //       this.brand = result.brand;
  //       this.flightNumber = result.flightNumber;
  //       this.desc = result.desc;
  //     }
  //   });
  // }
}
