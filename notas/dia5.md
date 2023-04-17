Tareas
    - ID
    - Titulo
    - Descripcion
    - Duración (horas)
    - Estado (listado de valores) # Dentro de un rato
Listas de tareas
    - ID
    - Titulo

La idea es poder crear listas de tareas
Dentro de una lista de tareas poder crear tareas

/api/v1/tasklists
    GET
    POST

/api/v1/tasklists/{id}
    DELETE
    GET
    PUT

/api/v1/tasklists/{id}/tasks
    GET
    POST

/api/v1/tasklists/{id}/tasks/{id}
    GET
    PUT
    DELETE

---

| Listas de tareas   |    | Titulo       |                        ELIMINAR   | En cuanto cambie el valor y pierda
| lista1             |                                                       | el foco
| lista2             |    Tareas de una lista                                |
| lista3             |     1 Nombre              Horas            ELIMINAR   | Cuando cambie de tarea
|                    |        descripcion                                    |
|                    |     2                                                 |
|                    |     +                                                 |
|                    |                                                       |


Nombres:
- Task
- TaskList

Componentes
- App
- Task
- TaskList
- TaskListList


## Comunicaciones
                         App
    TaskListList       <     >        TaskList
                                        v  ^
                                        Task
                                        
## Comunicaciones entre TaskListList > TaskList

                         App
    TaskListList                    TaskList

### Selección de un tasklist
### Si un tasklist es eliminado, en el TaskListList ya no debe de salir
### Si un tasklist es modificado, en el TaskListList debe salir un nuevo nombre de lista

Y cómo resolvemos todas estas?
- INPUT?
- OUTPUT?

Ni lo uno, ni lo otro !!!! Esas soluciones aquí no me sirven.
Por qué?
Qué relación hay entre TaskList y Task?  Dependencia jerárquica (PADRE-HIJO)
Qué relación hay entre TaskListList y TaskList?  Ninguna... = PROBLEMA !
    En este caso la solución REDUX (mantener ESTADOS GLOBALES) -> NgRx
    Esto va a ser COMPLEJO ! No es nada fácil. PERO UNA VEZ MONTADO ES MUY MANTENIBLE !

Hoy no nos vamos a meter con ese tema... Lo haremos Mañana. + Routing

Por ahora lo vamos a resolver con funciones de callback + INPUTs

                         App
        ^EVENTO                     v ID
    TaskListList                    TaskList
        INPUT funcionSeleccion          implementación de la funcionSeleccion

## Comunicaciones entre TaskList y Task

### Del TaskList al Task

El task que debe representar.
La resolvemos con un INPUT en el task

### Cuando un task es modificado al taskList

Si el task se marca como acabado, quizas el padre lo saca al final de la lista... TODO

### Cuando un task es eliminado

    TaskList 
        ^   templateHTML
        ^       *ngFor Para cada task del ARRAY
        ^           <task (taskBorrado)=""
        ^                 [FuncionALaQueLlamarCuandoTaskSeaBorrado]
                          id="" 
                          data="">
        ^
    Task +
        OUTPUT
            TaskBorrado
        INPUT
            FuncionALaQueLlamarCuandoTaskSeaBorrado
        templateHTML
            <button (click)="eliminar()"> Eliminar </button>
        componente
            eliminar()
                llamaAlServicio y el task se borra el la BBDD
                OPCION 1: lanzar un evento!!!! que capture un padre! OUTPUT
                OPCION 2: funcion de callback: 
                    FuncionALaQueLlamarCuandoTaskSeaBorrado()


                    Comunicar Task      ->      TaskList
                                OUTPUT -> evento -> procesa        
                                INPUT < TaskList (con una función)
                                    Task invoca la función

                La opción con el OUTPUT es más limpia!