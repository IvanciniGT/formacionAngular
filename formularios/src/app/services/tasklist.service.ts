import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TaskList } from "../models/tasklist.model";
import { Task } from "../models/task.model";
import { UpdatableTaskList } from "../models/tasklist.updatable.model";
import { UpdatableTask } from "../models/task.updatable.model";

@Injectable()
export class TaskListService {

    getTaskListList(): Observable<Array<TaskList>> {
        return of([]);
    }

    getTaskList(id:number): Observable<TaskList> {
        return of();
    }

    getTask(taskListId:number, id:number): Observable<Task> {
        return of()
    }

    deleteTaskList(id:number): Observable<TaskList> {
        return of();
    }

    deleteTask(taskListId:number, id:number): Observable<Task> {
        return of()
    }

    updateTaskList(id:number, newData:UpdatableTaskList ): Observable<TaskList> {
        return of();
    }
    updateTask(taskListId:number, id:number, newData:UpdatableTask ): Observable<Task> {
        return of();
    }
    
    newTaskList(newData:UpdatableTaskList ): Observable<TaskList> {
        return of();
    }
    newTask(taskListId:number, newData:UpdatableTask ): Observable<Task> {
        return of();
    }
}