import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { DiscdexComponent } from './discdex/discdex.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PopUpComponent } from './discdex/pop-up/pop-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayInfoComponent } from './discdex/display-info/display-info.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DiscdexComponent,
    AboutComponent,
    HomeComponent,
    PopUpComponent,
    DisplayInfoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    Ng2SearchPipeModule, //npm install ng2-search-filter
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
