import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';

interface DiscDex {
  name: string;
  flightNumbers: string;
  brand: string;
  desc: string;
}
@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.scss']
})
export class DisplayInfoComponent implements OnInit {
  public disc$?: DiscDex[];
  public name = '';
  public flightNumbers = '';
  public desc = '';
  public brand = '';

  constructor(private db: AngularFirestore, public dialog: MatDialog) {
    db.doc<DiscDex>('/test/testdisc').valueChanges().subscribe(result => {
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
