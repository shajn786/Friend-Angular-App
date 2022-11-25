import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendAddComponent } from './friend-add/friend-add.component';
import { FriendViewAllComponent } from './friend-view-all/friend-view-all.component';
import { FreindSearchComponent } from './freind-search/freind-search.component';
import { RouterModule, Routes } from '@angular/router';

const myRoutes: Routes=[
  {
    path:"",component:FriendAddComponent
  },
  {
    path:"viewall",component:FriendViewAllComponent
  },
  {
    path:"search",component:FreindSearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FriendAddComponent,
    FriendViewAllComponent,
    FreindSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
