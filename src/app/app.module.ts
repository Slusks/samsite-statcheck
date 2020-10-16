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
import {MatCardModule} from '@angular/material/card';
import { Post1Component } from './posts/post1/post1.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutmeComponent,
    PostsComponent,
    Post1Component
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
