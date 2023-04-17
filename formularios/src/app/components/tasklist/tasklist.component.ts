import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskList } from 'src/app/models/tasklist.model';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TaskListComponent {
  @Input()
  id?:number
  @Input()
  data?:TaskList
  
  tasks?:Array<Task>
}
