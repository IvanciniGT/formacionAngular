
# Componente listado de usuarios

Información de un conjunto de usuarios

Dónde puedo usar este componente?
- Administración de usuarios
- App de gestión de expedientes, solicitudes de vacaciones, solicitud de cursos

---------------------------------------------------------------------------------------------------
    Responsables de aprobación del expediente:
        Ivan Osuna          email       telefono        [MODIFICAR] < Click
        Federico García     email2      telefono2       [MODIFICAR] [ELIMINAR]
---------------------------------------------------------------------------------------------------
            VVVVVVVVV
---------------------------------------------------------------------------------------------------
    Responsables de aprobación del expediente:
        Ivan Osuna         |email |    |telefono |      [GUARDAR]  [CANCELAR]
        Federico García     email2      telefono2
---------------------------------------------------------------------------------------------------

Los datos... que vamos a pintar...
De dónde salen?

En los 2 casos vamos a mostrar las mismas opciones?
En el caso 1 (en función de un role) mostraré los botones de modificar / ELIMINAR
En el caso 2 (en función de un role) mostraré sólo el botón de ELIMINAR... que además tendrá un comportameinto diferente

El botón invocará por detrás a diferentes servicios.

TAREAS:

1- Meter la posibilidad de tener un botón de eliminar USUARIO
2- Si se muestra y lo apretan, ... CONFIRMACION POR FAVOR
3- Queremos eventos.... asociados a ese hecho
---
4- Componente ListadoDeUsuarios
   Debe mostrar un conjunto de usuarios... controlando si son editables y / o borrables
   Si lo son, que solo se puede editar/borrar uno a la vez

Desde un ID de usuario, quiero los datos de un usuario, dentro de una APP concreta....
Para mostrarlos con el UserComponent <usuario id="1212"/> en varios sitios diferentes de la app.

Voy a atacar siempre al mismo ENDPOINT para sacar los datos?
- Email
- Telefono
- Nombre
- Apellidos
- Edad
> GET https://miapp.com/api/v1/users/{id}

Si quiero un listado de usuarios... siempre tendré el mismo endPoint al que llamar?
- Administración de usuarios
    > GET https://miapp.com/api/v1/users
- App de gestión de expedientes, solicitudes de vacaciones, solicitud de cursos. RESPONSABLES DE APROBACION
    > GET https://miapp.com/api/v1/solicitudes/vacaciones/{id}/responsables
    > GET https://miapp.com/api/v1/solicitudes/vacaciones/{id}
- App de gestión de expedientes, solicitudes de vacaciones, solicitud de cursos. RESPONSABLES DE GESTION
    > GET https://miapp.com/api/v1/solicitudes/vacaciones/{id}/gestores
    > GET https://miapp.com/api/v1/solicitudes/vacaciones/{id}

--------------
                                    Editable?
Ivan                                    x
Felipe                                  x
Menchu                                  x

A nivel de listado:
editable : true
usuarioSeleccionado : None