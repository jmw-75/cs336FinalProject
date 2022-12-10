import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface DiscDex {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hw10';

  public name = '';

  constructor(private db: AngularFirestore) {
    db.doc<DiscDex>('/disc/newDisc').valueChanges().subscribe(result => {
      if (result) {
        this.name = result.name;
      }
    });
  }
}
