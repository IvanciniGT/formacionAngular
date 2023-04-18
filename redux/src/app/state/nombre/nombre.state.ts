/// ESTO SERIA UN FICHERO

// Esto es una definición de lo que va a tener el estado de mi aplicación
export interface NombreState {
    nombre: String | null;
}

// Doy el valor inicial que quiero para los datos que quiero tener guardados en el estado
export const initialNombreState: NombreState = {
    nombre: null
}


/*
En la realidad, en el estado guardamos:
- Los datos de usuario conectado
- Su JWT
- Errores que se producen en la app
- Listas de tareas que tiene el usuario
- La lista seleccionada
- Otro tema que mi app también esté gestionando
- Los roles del usuario
- El idioma que quiere
- Si quiere un plantilla de estilos u otra (dark, white)

Esos datos serán gestionados por un montón de Acciones, que definiré en multiples ficheros.
- Acciones de los datos de los usuarios
- Acciones de los datos de los listados de tareas
- Acciones de los errores
- Y esas acciones serán procesadas por distintos reducers 
    Montaré un reducer para cada conjunto de acciones:
        AccionesDeUsuarioReducer
        AccionesDeTareasReducer
        AccionesDeErroresReducer
*/