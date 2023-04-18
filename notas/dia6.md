
# Formularios anidados

Imaginad que asociado a cada usuario puedo tener múltiples direcciones

Direccion:
- Via
- Numero
- Poblacion

En el formulario de un usuario:

    Nombre: ________
    Apellidos: ________
    ....
    Moto: ___
    
    Direcciones: [+]
    via: _____________________ numero: ____ población: ________ [-]

# REDUX

Vamos a tener muchos Componentes en una app

Y vamos a querer comunicaciones bidireccionales entre esos Componentes
Angular, con los Input y los Output nos ayuda en esas comunicaciones, cuando Y SOLO CUANDO los componentes tienen una relación de dependencia JERARQUICA en el DOM.

En otros escenarios los INPUTs y los OUTPUTs no nos ayudan NADA.
Y en general, los inputs y los outputs no son en muchas ocasiones la mejor solución. 
Nos ofrecen una solución MUY RIGIDA

Que ofrece REDUX:
- La gestión DE UN ESTADO GLOBAL DE LA APLICACION
    Básicamente tendremos un objeto JSON en memoria... repleto de datos que a mis componentes les pueden interesar.
        > EJ. Array de Listados de tareas de un usuario
        > EJ. Listado de tareas en edición
        > EJ. Nuevo listado de tareas que se ha creado
        > EJ. Listado de tareas que acaba de ser eliminado
- Mis componentes van a poder interactuar con esos datos... pero REDUX lo hace de una forma muy especial!

Los componentes pueden suscribirse a ese "JSON"... al estado global!
De hecho pueden suscribirse sólo a algunos de los datos que guardemos en ese estado global (En el caso de Angular mediante un Observable)

También pueden hacer actualizaciones de datos que tenga guardados en el estado global...
    Eso se hace mediante el despacho de Acciones

Que es una acción? Una acción va a ser una función, que genera un JSON
Ese JSON tendrá datos asociados a es acción concreta.


> ESTADO GLOBAL:
>       array de Listas de Tareas (1)

>   EJ. Acción: nuevaListaDeTareas(título de la lista de tareas)
    Esa acción debería en última instancia provocar un cambio en el array con las Listas de Tareas en el estado global (1)
    Pero la acción no es quien lo va a ejecutar (ese cambio)
    La acción realmente solo transporta los datos necesarios para ese cambio.
    La acción realmente es una DESCRIPCION DE LA ACCION QUE HAY QUE REALIZAR
>       Algo así como: HAY QUE AÑADIR UNA NUEVA LISTA DE TAREAS ('título': "Lista de la compra" )

    Un componente va a crear ua acción (una descripción)
    Y solicita su despacho... su ejecución

    La ejecución de las acciones es responsabilidad de un REDUCER (-> REDUx)
    El reducer es una función que despacha ACCIONES 

ARQUITECTURA DE  COMPONENTES:

                                    app 
                        componente-a    componente-b
                         [store]          [store]
                            |               ^       
                 ACCION(establecerNombre)   |       
                            |               |       
                            V               |       
            ----------------------------------------------------------------
                                REDUCER
            ----------------------------------------------------------------
                                nombre
                              ESTADO GLOBAL
            Store = [reducers]


LA CLAVE DE USAR REDUX es que me permite comunicar componentes TOTALMENTE DESACOPLADOS ENTRE SI
Dicho de otra forma:
- En el componente A no va a existir NI UNA SOLA REFERENCIA AL COMPONENTE B
- En el componente B no va a existir NI UNA SOLA REFERENCIA AL COMPONENTE A


En REDUX, el estado GLOBAL de mi aplicación lo define el STORE, cuando montamos el store,
configurándole los reducers.
En nuestro caso, al configurar el store, hemos puesto:
>    StoreModule.forRoot({ app: appReducer, })
                         <------------------> De ahí se saca la estructura que tendrá el ESTADO GLOBAL

Hasta ahora, lo que hemos definido no ha sido el ESTADO GLOBAL.
Sino la parte del estado global que nos gestiona CADA REDUCER
Muestro reducer, genera un estado con la estructura:
>   export const appReducer = createReducer(initialState, ... funciones de reduccion)   
                                            <----------> Que está aquí definida
En nuestro caso, nuestro reducer, genera un estado del tipo: 
    {
        user : UserState,
        error: ErrorState,
        nombre: NombreState
    }
Pero el store, está preparado para trabajar con MULTIPLES REDUCERS... y juntará los estado de cada uno de ellos
para dar lugar al estado global, que en nuestro caso será de la forma:
{
    app: {
        user : UserState,
        error: ErrorState,
        nombre: NombreState
    }
    ,...
}