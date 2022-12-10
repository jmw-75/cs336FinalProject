import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface DiscDex {
  name: string;
  flightNumbers: string;
  brand: string;
  desc: string;
}
@Component({
  selector: 'app-discdex',
  templateUrl: './discdex.component.html',
  styleUrls: ['./discdex.component.scss']
})
export class DiscdexComponent implements OnInit {

  public name = '';
  public flightNumbers = '';
  public desc = '';
  public brand = '';

  constructor(private db: AngularFirestore) {
    db.doc<DiscDex>('/disc/newDisc').valueChanges().subscribe(result => {
      if (result) {
        this.name = result.name;
        this.flightNumbers = result.flightNumbers;
        this.desc = result.desc;
        this.brand = result.brand;
      }
    });
  }

  ngOnInit(): void {
  }

}
