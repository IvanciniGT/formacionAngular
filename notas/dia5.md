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

---

# Autenticación y Autorización

Si mi app web para una operación necesita autenticar al usuario / autorizar
Delega esa responsabilidad a un Proveedor de Autenticación.
Que mi app, lanza un http 300 a la URL del proveedor de Autenticación
Y el navegador descarga(para, destruye) mi app... y carga en la pestaña la URL del proveedor
Donde se mostrará un formulario de login
El usuario rellena ese formulario (contraseña) y la manda al proveedor de Autenticación
Es proveedor después de haber validado las credenciales emite un TOKEN de acceso: JWT
El proveedor envía otro http 300 a nuestra app.
Nuestro JS recibe el JWT... y lo medio valida! = CHAPUZA QUE HACEMOS EN EL FRONT (aceptada)
Miramos los datos y la firma.... para asegurarnos que la información ha sido 
realmente generada por el proveedor de identidad
Una vez hecho eso, miramos en el JSON los roles del usuario para autorizarle o no!
- Si le autorizamos, en un momento dado, llamaremos al BACKEND y le suministraremos el JWT

En el backend, se lo toman más en serio!!!!!
Adicionalmente, a esas validaciones sobre el JWT, el backend va a preguntar al Proveedor de identidad: OYE!!! el jwt sigue siendo válido? Y el Servidor de autenticación contestará
- SI 
- NO... ese usuario ya hizo logout... no se de donde leches has sacado eso!!!
- Y el backend lo rechazará

## Autenticar

Asegurar su identidad

## Autorizar

Sabiendo quien eres, saber si tienes suficientes permisos para hacer una operación

