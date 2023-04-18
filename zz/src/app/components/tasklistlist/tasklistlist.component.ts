import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tasklist-list',
  templateUrl: './tasklistlist.component.html',
  styleUrls: ['./tasklistlist.component.css']
})
export class TaskListListComponent {
  titulosListas : Array<String> = ["Titulo1","Titulo2"]

  titulo = new FormControl()

  nuevaTarea(){
    this.titulosListas.push(this.titulo.value)
    this.titulo.setValue("")
  }
}
