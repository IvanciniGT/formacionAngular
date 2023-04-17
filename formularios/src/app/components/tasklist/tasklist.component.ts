import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskList } from 'src/app/models/tasklist.model';
import { TaskListService } from 'src/app/services/tasklist.service';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TaskListComponent implements OnInit{
  
  @Input()
  id:number = -1
  @Input()
  data?:TaskList
  
  constructor(private taskListService:TaskListService ){}

  ngOnInit(): void {
    console.log(this.id)
    if(this.id != -1) {
      this.taskListService.getTaskList(this.id).subscribe( 
        data => {
          console.log(data)
          this.data=data 
        }
      )
    }
  }

}
