import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PostsComponent } from './posts/posts.component';
import { MatCardModule} from '@angular/material/card';
import { Post1Component } from './posts/post1/post1.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { EditorComponent } from './editor/editor.component';
//import { AngularFireAuthModule } from '@angular/fire/auth/';
//import { AngularFireDatabaseModule } from '@angular/fire/database'
//import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from '../environments/environment';
//import { AngularFireModule } from '@angular/fire';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutmeComponent,
    PostsComponent,
    Post1Component,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {environment}
