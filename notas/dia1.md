# Angular JS

Un framework de JS para desarrollo de frontends de apps web.
Quién lo hace? Google

Hay frameworks equivalentes a Angular? ReactJS, VueJs, Polymer

Antiguamente, el frontend (HTML+CSS) de una app web la generábamos dónde? En el servidor:
- JAVA: JSPs
- .net: ASPs
- PHP

Eso no nos gusta YA desde hace años... por qué?
- Rendimiento? Descargar el servidor... y que se coma parte del trabajo el cliente (que hoy en día tenemos clientes MUY POTENTES)
- Montamos un sistema MAS DESACOPLADO! y eso nos interesa mucho... ya que a día de hoy, no sólo usamos un navegador web para consultar/actualizar información / servicios... sino que usamos otro tipo de frontends:
  - App nativa para un dispositivo: Smartphone, TV
  - App dentro de un asistente de voz (ALEXA, OK Google, SIRI)
- Mucha menos interactividad:
  - El protocolo HTTP: Request-> Response (HTML)
    El request lo haciamos al apretar un enlace o mandar un formulario... y allí se cargaba OTRO HTML Completo que mandaba de vuelta el servidor

  - Hoy en día trabajamos con el concepto de SPA: Single Page Application
    Donde el contenido de la página muta, va cambiando.
    Asociado a un evento que ocurre en el navegador (click, mouse over...) se hace una petición a un servidor
    por parte de un programa JS que corre en el navegador.
    El JS toma los datos de vuelta que manda el servidor y genera un TROZO de HTML, que se inyecta en el DOM que estamos visualizando en el navegador.
    (** Nota: Lo que representa un navegador es el DOM)
    DOM: Document Object Model
- Reutilizar trozos del HTML que estamos generando... extender HTML
    <user id="2938472">
        ---> Haga un query a un servicio de Backend... y traiga los datos del usuario... y su foto
        ---> Genere una representación gráfica "bonita" de esos datos..
        ---> Me permita incluso apretar un botón para poder cambiar el email de la persona y su teléfono
             Bueno... esto solo si estoy logeado como ese usuario
        ---> con enlaces, para iniciar videollamada, sms, whatsapp, email
    A partir de ese momento quiero usar esa marca en todos mis proyectos.

    Eso se puede hacer de forma estándar en el mundo WEB? El definir mis propias marcas HTML con su propio comportamiento?
    Antes no... ahora si, como dice el compi: WEB COMPONENTS

    WebComponent? Un estandar del W3C

    W3C??? World Wide Web Consortium (Tim Berners-Lee... allá por los 90, cuando crea el concepto de WEB: http + html)
        Consorcio donde intervienen multiples empresas y fabricantes, para regular / publicar estándares:

        HTML
        CSS
        XML
        XSL
        XPATH
        WEBCOMPONENTS: A día de hoy, todos los navegadores soportan WebComponents
                        Antes no existía este estandar... pero queríamos esta funcionalidad.
                        Y salieron al mercado un huevo de frameworks que nos la ofrecían de una u otra forma:
                            - AngularJS
                            - ReactJS
                            - VueJs
                        Los navegadores de internet exportan / ofrecen esa funcionalidad mediante un API JS 
                        Y JS se convirtió en el lenguaje par generar frontends... No hay otro YA.. no tiene sentido.

La comunicación entre cliente (browser) y un servidor se hace mediante protocolo: http
En concreto, en la mayor parte de los casos, sobre todo cuando hay datos que viajan por la red, usaremos la variante segura:
http+tls = httpS < Capa de seguridad, me ayuda a frustrar (no a prevenir, no puedo prevenirlo) 2 tipos de ataques muy concretos:
- Suplantación de identidad: Te monto un frontal similar al de la web a la que realmente quieres acceder...
                             Es tan fácil como cambiarme el DNS o meter un router de por medio malicioso!
                             Lo que hacemos es cuando me conecto con un servidor me muestra un certificado.
                             Me pedís un documento que acredite mi IDENTIDAD: AUTENTICACION
                                DNI: Foto + nombre
                                      V
                                      Contraseña (característica biométrica)
                                Carnet de la biblioteca de mi barrio... el de la bolera!
                                El tema es que confiais en quien emite ese documento (Certificado)
                            Un sitio web hace lo mismo. Muestra un certificado, en el que viene:
                            Su nombre, su ip (o nombre de dominio) + Firma de una entidad certificadora (se supone que me fio de ella) que yo puedo validar.
- Man In The Middle:        Es que alguien se ponga a ESPIAR los mensajes que estamos mandando por la red.
                            Lo hacemos con cualquier sniffer de red.
                            Esto no es evitable.. es frustrable...
                            Lo que hacemos es cifrar (encriptar) los datos. Se hace mediante la combinación de 2 tipos de algoritmos:
                                - Clave simetrica
                                - Clave asimetrica

HTML+CSS Es un formato (lenguaje) orientado a la transmisión de datos que van a ser consumidos por SERES HUMANOS (con sus ojos).
Párrafo, negritas, subrayado, imagen, lista desordenada, font-size: 14pt; font-family:Arial.

# Uso del protocolo HTTP

## Protocolo?

Conjunto de reglas

## Protocolos de comunicaciones?

Conjuntos de reglas que usamos cuando establecemos una comunicación

Qué hago cuando quiero hablar con un amigo por radio / walkie-talkie. PROTOCOLO?
Cambio / Cambio - corto


        COMUNICACION

            (programa)            Medio / Canal (red)
            Emisor     ---------------------------------------  Receptor (servidor)
                        ---> Mensaje (datos) deben ir en un lenguaje
                       ---------------------------------------

                Además debe usarse un PROTOCOLO !

## En qué consiste el protocolo HTTP?

Es una comunicación SINCRONA !
Ambos (emisor/receptor) deben estar presentes en el momento de la comunicación.
    > Llamada de teléfono

Es una comunicación ASINCRONA !
El receptor no tiene porqué estar presente en el momento en el que el emisor lanza el mensaje.
    > Whatsapp

No es una comunicación bidireccional!
El emisor del mensaje siempre es el cliente! Lanzando lo que denominamos un         Request
A lo que el servidor (receptor) manda una respuesta:                                Response

Websockets es otro mecanismo (protocolo) de comunicación que si es bidireccional completo.

Lo que mandamos por HTTP se guarda dentro de una caja, como cuando pido algo a AMAZON !
Y la caja por fuera lleva una PEGATINA con información adicional:
- Destinatario
- Fragil
- Lado de arriba
- Dimensiones
- Peso
- Tipo de contenido: Perrillo

En HTTP, tanto el request, como el response se organizan de esta forma:
LO QUE MANDO:           BODY 
METADATOS ASOCIADOS:    Headers

Cuando hacemos un request siempre apuntamos a una URL           
    protocolo  :// servidor(dominio)  :  puerto  contexto(path,ruta)  ? parametros (param1=value1&param2=value2)

En el request siempre mandamos un metadato: VERBO, METODO: 
- GET
- POST
- PUT
- DELETE
- HEAD

En la respuesta siempre hay otro metadato importante: RETURN CODE:
- 2XX   Success
- 3XX   Redirecciones
- 4XX   Error de cliente (no ha mandado los datos adecuados, la ruta no existe...)
- 5XX   Error de servidor (se me ha caido la BBDD), tengo un bug

# En nuestro caso vamos a estar generando HTML desde JS corriendo en un navegador

## Características de JS

Es un lenguaje de programación, de tipado DINAMICO.

- Tipado estático: Las variables tienen un tipo preasignado ... y solo pueden apuntar a objetos de ese tipo.
- Tipado dinámico: Las variables no tienen un tipo preasignado... y pueden apuntar a cualquier tipo de objeto.
                   El tipo de las variables se determina en tiempo de ejecución... O mejor dicho
                   La variable apuntará a un objeto... y de ese objeto miraré el tipo.

¿Qué es mejor, tipado estático o dinámico?
Depende...

ESTATICO        A FAVOR                                                 
                Conocemos en todo momento el contenido que puede tener una variable.
                Conocemos en todo momento el tipo de datos que una función puede requerir como argumentos
                Conocemos en todo momento el tipo de datos que una función puede devolver
                Puedo revisar que los tipos de datos suministrados cuando hago una invocación o recibo una respuesta sean los adecuados ---> Al compilar

                EN CONTRA
                Es más verboso si quiero implementar POLIMORFISMO por tipos de argumentos
                En general el lenguaje se hace más verboso

DINAMICO        EN CONTRA
                NO Conocemos en todo momento el contenido que puede tener una variable.
                NO Conocemos en todo momento el tipo de datos que una función puede requerir como argumentos
                NO Conocemos en todo momento el tipo de datos que una función puede devolver
                NO Puedo revisar que los tipos de datos suministrados cuando hago una invocación o recibo una respuesta sean los adecuados.

                A FAVOR                                                 
                Es menos verboso si quiero implementar POLIMORFISMO por tipos de argumentos
                En general el lenguaje se hace menos verboso, más cómodo... pero ILEGIBLE

Cuando estoy en un proyecto grande... y participan 5 personas.... y todos ahí creando sus funciones...
Y quiero llamar a la función que ha hecho un compañero... qué le tengo que pasar? 
Si la tengo en JAVA: Lo tengo clarinete...miro la definición de la función y a correr
Si la tengo en JS: JODIDO VOY !!!!!


Al final... en los lenguajes de tipado DINAMICO recurrimos a TRUCOS RASTREROS para conseguir un tipado estático.
Porque nos hace falta tipado estático en un proyecto de un tamaño normal!

```py
numero: str = "hola"
def saluda(nombre:str):str :
# En python ese str no vale pa' na', más allá de informar a un desarrollador del dato que se espera...
# que si le paso otro... aquello tira.
```

En JS lo que se ha hecho es INVENTAR UN LENGUAJE NUEVO, que soporte tipado estático: TypeScript
Y lo que hacemos es pasar posteriormente de Typescript a Javascript... que es lo que necesitamos en un navegador...
o en nodeJS.
A la que hacemos esa conversión procedemos a revisar los tipos de datos.
A ese proceso le llamamos: TRANSPILACION !

Adicionalmente, en el mundo JS, hacemos otro proceso adicional antes de pasar un código a producción: MINIFICACION del código:
- Hacer que el código ocupe menos:
  - Quitamos espacios en blanco redundantes, saltos de linea, renombramos las variables numeroDeCuenta-> a1

Angular usa TYPESCRIPT.

### Variables

Dependiendo del lenguaje de programación, el concepto variable cambia.
En JS, en JAVA, en PYTHON es una referencia a un dato (objeto) que está guardado en memoria.

var texto = "Hola";             JS 
                                JAVA? Desde java 11 si... 
                                        NOTA: El var de JAVA es completamente diferente al de JS
                                                JS Es tipado dinámico
                                                JAVA es tipado estático... y eso no cambia porque ponga la palabra var.
                                                En JAVA la palabra var... se usa para hacer INFERENCIA DE TIPOS.
String texto ="Hola";           JAVA

Cuántas cosas ejecutan esas lineas? En cuántas partes dividimos esas lineas? 3
- "hola"                        Pone un Objeto de tipo String, con valor "Hola" en la memoria RAM
- var texto / String texto:     Define una variable.
                                - En el caso de JS, las variables no tienen asignado un tipo estático/predefinido -> TIPADO DINAMICO
                                - En el caso de JAVA, las variables SI tienen asignado un tipo estático/predefinido -> TIPADO ESTATICO
- =                             Asigna la variable al objeto "hola" (que es un objeto de tipo String, en JAVA, en JS... y en cualquier lenguaje)


texto = "Adios"
- "Adios"                       Pone un Objeto de tipo String, con valor "Adios" en la memoria RAM. 
                                Donde? en el mismo sitio donde ponía "Hola". No, nunca, JAMAS !!!!
                                Llegados a este punto, en memoria RAM tenemos 2 objetos distintos: "Hola" y "Adios"
- texto =                       Varia la variable, para que ahora la variable APUNTE al objeto "Adios"
                                "Hola" sigue en memoria, ocupando espacio...
                                JS = JAVA hacen un destrozo con la RAM... DESTROZO !!!!
                                Eso es malo? NO, es una feature !!!!

                                JAVA: Vamos a montar un lenguaje de programación que haga un destrozo con la RAM.
                                Por qué no interesó hacer un lenguaje que NO HICIERA UN DESTROZO con la RAM? 
                                    Ya existía: C++, que es casi igual a JAVA en la sintaxis.
                                    Programar en C++ es duro, de cojones... porque hay que gestionar la memoria.
                                
                                Lo que se hizo es montar un proceso que está trabajando en background... de vez en cuando, llamado el GARBAGE COLLECTOR ! JAVA, JS, PYTHON...
                                Que de vez en cuando, entra y limpia la BASURA (GARBAGE) que son objetos que quedan en RAM
                                Sin ninguna variable que les esté apuntando... y por ende irrecuperables = BASURA !

texto = 33;
            Esto en JS cuela. Y ahora la variable texto apunta a un objeto de tipo Number
            Esto en JAVA NO cuela. Ya que JAVA es de tipado estático... y al definir una variable, se le asigna un tipo.
            Y a partir de ese momento, la variable solo puede apuntar a objetos de ese tipo concreto.

# Lenguajes compilados vs Lenguajes interpretados

Tiene que ver con forma en la que se traduce el código que escribe el desarrollador en el lenguaje de turno
al código que es capaz de ejecutar el SO que corre en un determinado HARDWARE.

C       .c .h ---> compilo / Ensamblo   ---> Binario ejecutable (en un determinado SO/Arqu. microprocesador)
C++

PYTHON  No se compila. Se usa un INTERPRETE -> Que traduce en tiempo real el código al SO de destino
            En python el interpreta es ... hay muchos:
                cython
                jython
                pypy
JS          En JS el intérprete es? Un conjunto de programas que se incluyen dentro de los NAVEGADORES

JAVA    Es raro... es compilado e interpretado a la vez.
        .java ---> .class (byte-code) ---> Es interpretado por una MV

NODEJS? Es el antiguo interprete/motor de JS que se incluía en el navegador CHROMIUM:
- Chrome
- Edge
- Opera
- Safari

En un momento dado Google, desgaja el código de ese motor del navegador CHROMIUM y lo convierte en un proyecto independiente.
Y hace que ese motor/intérprete se pueda ejecutar fuera de un navegador de internet.

Además, Node ofrece un conjunto de Librerías... para: Interactuar con la consola de SO, con el sistema de archivos del SO...

Siempre nos quedará la resistencia: Firefox !!!!!!

## Las apps que vamos a montar con AngularJS...

Corren sobre Node? NO
Corren sobre el navegador...

Y el navegador lo que recibe es CODIGO JS.
Desde un servidor WEB, por protocolo HTTP.

A la hora de desarrollar una aplicación frontal con Angular, usaremos NODE como servidor web.
Posteriormente empaquetaremos la app... y tendré un conjunto de fichero .js + .css + imagenes...
Y ese empaquetado lo soltaré en un servidor WEB... el que sea... uno que monte con nodeJS, NGINX, Apache HTTPD, Tomcat, Weblogic.

Otra cosa es que quiera montar un BACKEND en JS... que puedo? Claro
Corriendo en NODEJS, como intérprete... y le tendré que poner una librería encima que cree un servidor WEB dentro de NodeJS:
Express.

---

Mucho conoceis JS como aquel cutre lenguaje de programación que se creo en 10 días: mocha
Lo monto la gente de NETSCAPE para poder agregar algo de lógica a las páginas web.

Este JS fue evolucionando... de mala forma. Cada navegador implementaba su propio INTERPRETA DE JS...
a su bola!
Y nos pasaba que el JS Que funcionaba en Netscape, Opera, Firefox, no funcionaba en Internet explorer.

En un momento dado, se pone orden en JS. Se genera un estandar.
Quién genera ese estandar de JS? La ECMA.
A partir de ese momento el nombre oficial del lenguaje cambia: ECMAScript, aunque todo el mundo le sigue llamando Javascript.
Van saliendo versiones del estandar... y los interpretes las van incorporando (los cambios)
ES1
ES2
ES3
ES4
ES5
ES6
ES7
ES2015
ES2016
ES2018
ES2022

---
En el mundo de JS / Node, usamos mucho npm

# Qué es npm? 

Es una aplicación que nos ayuda a automatizar tareas del día a día del proyecto.
- Gestión de dependencias (paquetes)
- Transpilación
- Empaquetado
- Levantar un servidor web de prueba para ir comprobando el resultado
- Ejecutar pruebas unitarias

Todos los lenguajes de programación tienen una herramienta equivalente.
JAVA: Maven, gradle, sbt
.net: dotnet, msbuild, nuget
py: poetry, pip 

Los proyectos los vamos a crear con NPM o un equivalente (YARN)

Cualquier proyecto creado de esta forma, tendrá un archivo llamado: package.json

En ese archivo que encontramos?
- Coordenadas del proyecto: ID, versión
- Dependencias
- Tareas que vamos a automatizar (empaquetado, transpilación, pruebas)

En nuestro caso, al trabajar con Angular, vamos a encontrar algunos ficheros más:
- tsconfig -> configuraciones del lenguaje TypeScript
- angular.json -> Configuración del proyecto Angular

Adicionalmente, las tareas que vamos a automatizar: 
- Empaquetado
- Transpilación
- Levantar un servidor de prueba...
- Es como vamos a crear un nuevo proyecto
No las vamos a hacer con npm

Las haremos con otra aplicación que nos ofrece la propia gente de Angular: 
AngularCli : comando ng

---

# JSON

Javascript Object Notation

var variable = /* Cualquier cosa que ponga aquí, que no sea una expresión, es JSON */
var numero = 3
var logico = true
var objeto = {
                "nombre": "Ivan",
                "apellidos": "Osuna",
                "edad": 44
             }
var lista = [
                {
                    "nombre": "Ivan",
                    "apellidos": "Osuna",
                    "edad": 44
                },
                {
                    "nombre": "Lucas",
                    "apellidos": "García",
                    "edad": 33
                }
            ]
var lista = [1,2,3]

---
5           Esto es JSON? SI
---
"hola"      Esto es JSON? SI
---
true        Esto es JSON? SI
---
[1,2,3]     Esto es JSON? SI

# GIT

Es un sistema de control de código fuente.
SCM: Source Code Manager
Sistema de control de versiones.CVS -> SVN -> GIT

Linus Torvalds -> Linux 

---

# Versiones de software

1.2.3
                Se incrementa?
1: MAJOR        Cambio que no respeta retrocompatibilidad
2: MINOR        Nueva funcionalidad
                Marcar funcionalidades como obsoletas (deprecated)
                    + Arreglo de bugs
3: PATCH        Arreglo de bug

Si se incrementa MAJOR, los que estén usando mi sistema/aplicación/librería SABEN que lo que tuvieran anterior puede dejar de funcionarles.
1.2.3       Significa que quiero ESA VERSION CONCRETA
^1.2.3

Habitualmente que versión nos interesa a nosotros fijar en un entorno de producción.
Tengo una app... que necesita una libreria o un software en version 1.2.3.
Que pido en producción, la 1.2.3?
    La última?  Descartado.... puede ser que mi app deje de funcionar ante un cambio MAJOR
    1?          BUENO,...       Me da los ultimos arreglos... 
                                pero también incluye nueva funcionalidad, que puede venir con sus propios BUGS nuevos... y esa funcionalidad no la estoy usando
    1.2?        GENIAL         Tiene la funcionalidad que necesito... y quiero de esa el ultimo
                                    patch   (con la mayor cantidad posible de arreglos)
    1.2.3       Descartado.... Si hay una versión que arregle bugs, me interesa...

Si yo quiero la 1.2.3       cosa que descartaremos, pondría directamente eso: 1.2.3
Si quiero el ultimo patch de un minor concreto pondre:  ~1.2.3. Que sea versión 1.2-> 1.2.4, 1.2.8. Nunca la 1.3. LO MAS Habitual
Si quiero el último MINOR de un MAJOR concreto, pongo la plica: 
        ^1.2.3
            Al menos esa... pero si sale un patch nuevo, o un minor nuevo, ese, actualiza!
            1.2.8 √
            1.4.0 √
            2.0.0 ESTA NO LA QUIERO !

---

PROMESAS: PROMISE de JS

En el mundo JAVA también existen.. aunque se usan menos en JAVA: Future

Esto lo usamos en programación asíncrona!

En JS vamos atener un HUEVO de programación asíncrona (comunicaciones asíncronas, trabajos asíncronos)

En JS en las promesas encontramos los métodos:
.when( funcion que quiero que se ejecute si todfo ha ido bien)
.catch( funcion que quiero que se ejecute cuando algo haya ido mal)


El solicitante del trabajo no espera para proseguir su trabajo al que el ejecutor del trabajo haya finalizado la tarea que se le ha encomendado.

CODIGO
...
var datos = ???;
var resultado;
llamarAUnServicioWeb(datos, miTareaPosterior ) // Paso una referencia a la función de callback: PROGRAMACION FUNCIONAL
var promesa = llamarAUnServicioWeb(datos ) 
...
console.log("Buscando");    (1)
if (promesa.RESUELTA) {
    console.log("ACABADO")
}


// Tengo que procesar la respuesta que recibo del servicio WEB... Cómo implemento eso?
    - Mediante la entrega y resolución de una promesa
    - Mediante una función de callback
---

async function llamarAUnServicioWeb(datos, callback){
    var resultado = // Llamamos a un servicio web... esperamos respuesta y capturamos resultado
    callback()
}

async function llamarAUnServicioWeb(datos){
    // Abre un hilo, 
        para ejecutar la llamada al servicio web
        asigna como resultado de la promesa el valor que devuelva el servicio web
    // Crea una promesa, que es un objeto con un par de funciones 
    var mipromesa = new Promise();
    //al hilo, le configuro la promesa
    // Inicio la ejecuión del hilo
        En hilo ejecutara el codigo de arriba... el que haya configurado
    //devuelvo la promesa
    return mipromesa;
}

---

function miTareaPosterior(){
    console.log("ACABE!");
}

Pregunta, cuando se ejecuta la linea (1), con respecto a la respuesta que reciba del 
servicio?
Antes o después? Depende...
    Si la función llamarAUnServicioWeb es síncrona (por defecto)
        El hilo que llama a la función, es el hilo que la ejecuta normalmente.
        Y hasta que no acaba de ejecutarse la función, el hilo no vuelve al código principal a seguir ejecutando.
    Si la función llamarAUnServicioWeb es asíncrona 
        El hilo que llama a la función no es el hilo que ejecuta la función. 
        Se genera un hilo nuevo ( o se toma de un pool) para que ejecute esa función.

EN JS... en general cuando creamos cualquier FRONTAL, usamos mucho HILOS

BUSQUEDA en una pantalla de una app

*********************************************
FORMULARIO DE BUSQUEDA

Término: Bicicletas
                            BOTON: (Buscar)
*********************************************
Realizando búsqueda.. espere *^*^[]

---

# Paradigmas de programación

Son las formas en las que puedo usar un lenguaje para realizar las tareas que necesito
- Imperativo: Ejecuto código en el orden en el que lo he ido escribiendo...  de arriba a abajo
              if, else, for, while
- Lenguaje procedural: Cuando el lenguaje me da la posibilidad de definir mis propias: funciones, procedimientos, métodos
                        Y de invocarlos
- Programación funcional: Cuando el lenguaje me permite que una variable apunte a una función.
                            Las funciones se tratan como cualquier otro dato.
                            En cuanto esto es posible:
                                - Podemos pasar a unas funciones, otras como argumentos
                                - O puedo hacer que una función devuelva otra función
                            Muy habitual en el mundo de la programación funcional es el definir funciones en linea (dentro de un statement) ... eso es lo que conocemos como expresiones lambda... y que en el hortera mundo de JS, le han llamado: Funciones flecha!

                            var doblar = (x)=> x*2
                            var multiplicarPorDos = doblar

                            function doblar (x){
                                return x*2
                            }

- Orientación a objetos: Cuando el lenguaje me da la posibilidad de definir mis propios TIPOS DE DATOS (CLASES), con sus métodos particulares... Y posteriormente puedo generar instancias de esos tipos (objetos)

JS Admite esos 4 paradigmas? SI
JAVA?                        SI... el que faltaba era la programación funcional... nos costó años... hasta java 1.8

# INVERSION DE CONTROL !

codigo tradicional:
linea 1
linea 2
if (condicion)
    linea 3
else
    linea 4

Yo control el flujo de ejecución: 
Primero se ejecuta linea 1
Luego linea 2
Luego linea3 o linea 4 en funcion de condicion

Delegamos el control del flujo del programa a un externo (angular, .netcore, spring)
A ese externo le voy configurando cosas.
Este codigo es para configurar la app
Este otro código es para cuando haya que meter algo en una BBDD
Este código 

---

# Inversion de dependencias

Principio de desarrollo de software en el mundo de la POO.
Las clases/codigo de alto nivel solo deben depende de interfaces(contratos) y no de implementaciones (clases) de esos interfaces

# Inyección de dependencias
Principio de desarrollo de software en el mundo de la POO.


# Inversion de control
Patron  de diseño de apps... en el que el control del flujo de una app se delega a un tercero.
Yo ya no llamo a la función: buscarPalabra

Angular va a llamar a esa función cuando toque.
    Y OJO, que la función necesita un Diccionario... Buscate la vida y se lo pasas
---

Monto una libreria para gestionar diccionarios
    interfaz Diccionario
        existe(palabra) -> boolean
        significados(palabra) -> List de textos

Cuantas implementaciones tendré de esa libreria:
    BBDD -> DiccionarioDesdeBBDD
    Ficheros de texto -> DiccionarioDesdeFicheros

App que quiere usar la libreria

import Diccionario

funcion buscarPalabra(miDiccionario, palabra) # INYECCION DE DEPENDENCIAS 
    var existe = miDiccionario.existe(palabra)
