import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DisplayInfoComponent } from '../display-info/display-info.component';

interface DiscDex {
  name: string;
  speed: string;
  glide: string;
  turn: string;
  fade: string;
  brand: string;
  stability: string;
  category: string;
  pic: string;
}

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  public disc$?: DiscDex[];
  public searchText: any;


  // https://stackoverflow.com/questions/47270324/nullinjectorerror-no-provider-for-matdialogref
  // https://stackoverflow.com/questions/60653753/share-component-data-to-angular-material-dialog

  constructor(private db: AngularFirestore,
    public dialog: MatDialog) {
    this.db.collection<DiscDex>('test', ref => ref.orderBy('name')).valueChanges().subscribe(res => this.disc$ = res);
  }

  openDialog(name: string, speed: string, glide: string, turn: string, fade: string, brand: string, stability: string, category: string, pic: string): void {
    const dialogRef = this.dialog.open(DisplayInfoComponent, {
      data: {
        name: name,
        speed: speed,
        glide: glide,
        turn: turn,
        fade: fade,
        brand: brand,
        stability: stability,
        category: category,
        pic: pic
      }
    });

    //console.log(event);
    //this.result.emit(event);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

}
