import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.scss']
})
export class DisplayInfoComponent implements OnInit {
  public name = '';
  public speed = '';
  public glide = '';
  public turn = '';
  public fade = '';
  public brand = '';
  public stability = '';
  public category = '';
  public pic = '';

  constructor(private db: AngularFirestore,
    public dialogRef: MatDialogRef<DiscDex>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.name = data.name;
      this.speed = data.speed;
      this.glide = data.glide;
      this.turn = data.turn;
      this.fade = data.fade;
      this.brand = data.brand;
      this.stability = data.stability;
      this.category = data.category;
      this.pic = data.pic;

      // console.log(this.data);
  }

  ngOnInit(): void {
  }

}
