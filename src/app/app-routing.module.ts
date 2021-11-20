import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EditorComponent } from './editor/editor.component';

import { HomepageComponent } from './homepage/homepage.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  //{ path: 'aboutme', component: AboutmeComponent},//
  { path: 'posts', component: PostsComponent},
  { path: 'editor', component: EditorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
