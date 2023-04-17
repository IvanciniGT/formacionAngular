import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './components/user/user.component';
import { AppComponent } from './components/app/app.component';
import { UserListComponent } from './components/userlist/userlist.component';
import { UserService } from './services/user.service';
import { TestUserService } from './services/user.service.test';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TestUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
