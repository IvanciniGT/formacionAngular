
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
            |               ^
 ACCION(establecerNombre)   |
            |               |
            V               |
            ---------------------
                   REDUCER
            ---------------------
                   nombre
                ESTADO GLOBAL