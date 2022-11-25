import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendAddComponent } from './friend-add/friend-add.component';
import { FriendViewAllComponent } from './friend-view-all/friend-view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendAddComponent,
    FriendViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
