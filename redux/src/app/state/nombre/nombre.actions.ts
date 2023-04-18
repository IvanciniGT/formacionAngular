import { createAction, props } from "@ngrx/store"

export const establecerNombre = createAction(
    '[Nombre] Establecer el nombre', // Nombre identificativo
    props<{ nombre: String }>()// Datos que son necesarios para describir la acción
);

export const desasignarNombre = createAction(
    '[Nombre] Desasignar el nombre', // Nombre identificativo
    props<any>()// Datos que son necesarios para describir la acción
);
