import { createReducer, on } from "@ngrx/store";
import { desasignarNombre, establecerNombre } from "src/app/state/nombre/nombre.actions";
import { initialNombreState } from "src/app/state/nombre/nombre.state";

export const nombreReducer = createReducer(
    initialNombreState, // Estado inicial
    // Las funciones que deben ejecutarse cuando se solicite una acción sobre el estado global
    on(establecerNombre, 
        // Aqui voy a definir la función que debe hacer la operación sobre el estado global
        // Esa función la solemos definir a traves de una expresión lambda (función flecha)
        ( state, {nombre} ) => ({
                                    ...state,
                                    nombre: nombre
                                })
            // Para redux, esto no funcionaría... 
            // ( state, {nombre} ) => {
            //    state.nombre = nombre
            //    return state
            //    }

            //      Ya que no hemos modificado el estado global
            //      Lo hemos mutado... pero el estado global sigue siendo el mismo OBJETO
      ),
      on(desasignarNombre, 
        ( state, _ ) => ({
                            ...state,
                            nombre: null
                })
      )
)

