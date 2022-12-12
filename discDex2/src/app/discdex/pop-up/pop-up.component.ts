import { Component, OnInit, Inject, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DisplayInfoComponent } from '../display-info/display-info.component';

interface DiscDex {
  name: string;
  flightNumbers: string;
  brand: string;
  desc: string;
}

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  //@Input() name!: string;
  public disc$?: DiscDex[];
  public name = '';
  public flightNumbers = '';
  public desc = '';
  public brand = '';

  constructor(private db: AngularFirestore, public dialog: MatDialog) {
    this.db.collection<DiscDex>('test', ref => ref.orderBy('name')).valueChanges().subscribe(res => this.disc$ = res);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DisplayInfoComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

}
