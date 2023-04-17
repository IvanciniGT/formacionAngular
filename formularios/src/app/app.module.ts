import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/tasklist/tasklist.component';
import { TaskListListComponent } from './components/tasklistlist/tasklistlist.component';
import { TaskListService } from './services/tasklist.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskListListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
