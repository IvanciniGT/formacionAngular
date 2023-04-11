import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserComponent } from './user/user.component';
import { UserService } from './user/services/user.service';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    UserComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
