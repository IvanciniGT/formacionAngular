import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskListService } from 'src/app/services/tasklist.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  @Input()
  id?:number
  @Input()
  taskListId?:number
  
  @Input()
  data?:Task

  datos!:Task

  enEdicion: boolean = false

  constructor(private taskListService:TaskListService){}

  ngOnInit(): void {
    if(this.id && this.taskListId ){
      this.taskListService.getTask(this.taskListId, this.id).subscribe(datos => this.datos=datos);
    }else if(this.data){
      this.datos=this.data
    }else{
      throw new Error('Atributos no válidos.');
    }
  }

  comenzarEdicion(){
    this.enEdicion=true
  }
  finalizarEdicion(){
    this.enEdicion=false
  }

  guardarFormulario() {
    console.log(this.datos)
    // Llamar al servicio
    // Lanzar un evento de update
  }
}
