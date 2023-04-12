import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserComponent } from './components/user/user.component';
import { AppComponent } from './components/app/app.component';
import { UserListComponent } from './components/userlist/userlist.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
