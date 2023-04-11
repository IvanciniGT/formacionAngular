
Javascript sale con el nombre MOCHA de la gente de netscape.
Lo compra en un momento dado Sun Microsystems, y decide cambiarle el nombre...
como nombre le pone Javascript... simplemente como una decisión de marketing 
para darle más promoción al lenguaje de programación que estaban desarrollando en ese momento ellos
que se llamaba JAVA.

# Componente usuario

1º Debe mostrar los datos del usuario... a saber:
    - nombre
    - apellidos
    - email
    - telefono
    - edad
    - foto
    NOTA: Y de donde se va a sacar toda esta info??? 
        De un servicio en backend, que me a va dar un JSON con todos esos datos
        Cuando llame al servicio... que tendré que suministrar? El id del usuario
2º El componente debe mostrar una opción (si se ha habilitado previamente) para cambiar los datos de contacto del usuario: telefono, email
    <usuario id="128" editable="true">
3º Nuestro componente debe tener un ESTADO
    vista
    edicion
4º Va a definir sus propios eventos:
    - ON_EDIT
    - ON_SAVED
    - ON_CANCEL


Este componente se podrá usar de forma aislada en una aplicación.
- Mostrar en una esquina de la pantalla los datos del usuario que está conectado.
Pero también podré utilizarlo con otros propósitos:
- App de gestión de expedientes... de lo que sean....
  Asociado a un expediente puedo tener el dato: SOLICITANTE
    <usuario id="128" editable="true">
  Asociado a un expediente puedo tener los datos de los responsableS de aprobación de ese expediente
                                                                   ^
    <listadousuarios>
        <usuario id="128" editable="true">
        <usuario id="148" editable="false">
    </listadousuarios>

---------------------------------------------------------------------------------------------------
    Responsables de aprobación del expediente:
        Ivan Osuna          email       telefono        [MODIFICAR] < Click
        Federico García     email2      telefono2       [MODIFICAR]
---------------------------------------------------------------------------------------------------
            VVVVVVVVV
---------------------------------------------------------------------------------------------------
    Responsables de aprobación del expediente:
        Ivan Osuna         |email |    |telefono |      [GUARDAR]  [CANCELAR]
        Federico García     email2      telefono2
---------------------------------------------------------------------------------------------------

Qué vamos a definir en un componente?       VISTA!
La lógica está en un controlador            CONTROLADOR

¿Cuál sería el modelo?                      Usuario

Lo que me pasa el servicio WEB              JSON que contendra los datos de un usuario
{
    "id":           1, 
    "surname":       "Ivan",
    "lastname":    "Osuna",
    "email":        "ivan@osuna.com";
    "age":         44,
    "pic":         "http://miserv....",
    "mobile":     "987654321"
}


M-V-C

Arquitecturas limpias? Clean Architecture? Tio bob!