import { Task } from "./task.model"
import { UpdatableTaskList } from "./tasklist.updatable.model"

export class TaskList extends UpdatableTaskList{

    id!:number
    tasks: Array<Task> = []

}