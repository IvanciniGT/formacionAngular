Estamos montando un módulo de Angular: app.module.ts
    Dentro de ese módulo hemos definido:
    - Componentes:  Son la forma en la que representamos la información (MODELO) en la pantalla
                        Selector                        Plantilla HTML      Hoja de estilos CSS     Eventos (UI, Modelos)
    - App         -   <app ...>               --->    <div>....</div>     Vacia
    - User        -   <usuario ...>           --->    <div>....</div>     Vacia                   Cuando se borra
                                                                                                    Cuando se modifica
                                                                                                    Cuando se cancela XXXX
                                                                                                    ...
    - UserList    -   <listado-usuarios ...>  --->    <div>....</div>     Vacia
    - Servicios:    Son la forma en la que gestionamos los datos
        UserService     Recuperarlos, modificarlos, eliminarlos, crearlos
    - MODELOS:      Son los que transportan la información con la que vamos a estar trabajando.
        Usuario

Adicionalmente hemos definido:
- Aplicación:
  main.ts
  index.html
  styles.css
  + código de un montón de dependencias que hemos ido añadiendo al proyecto 

Qué hace la aplicación?
- index.html
- Invocamos nosotros algún módulo? en el main.tf? NO
- Arrancar Angular
  - Le entrega a Angular nuestro Modulo... puro código... Le enseña a Angular:
    - Como representar ciertas marcas HTML CUSTOM que hemos definido (app, usuario, listado-usuario)
    - Que son ciertos tipos de datos, con los que vamos a trabajar (Usuario )
    - Cómo interactuar con unos servicios wen REST (UserService)

Mi aplicación tiene un puerto?   NO
Mi aplicación tiene un servidor? NO

Mi aplicación es 
- el código JS (+html+ imagenes) del módulo
- el propio código de la app: index.html, main.ts, styles.css, favicon

Esa aplicación cuando la tengo acabada o la quiero probar LA DESPLIEGO EN UN SERVIDOR WEB:
- NodeJS + Express
- Nginx
- Apache httpd
- Tomcat
- Weblogic
- IIS

Y ese servidor web, es el que tiene un puerto.
Y de paso mi aplicación desplegada dentro.
Cuando estamos desarrollando una app angular, usamos ciertas dependencias (EN DESARROLLO) para disponer de un servidor de pruebas, montado sobre NodeJS, donde se despliega mi app, cada vez que hago un cambio en el código.... para facilitarme el probar la app.

Un usuario cómo arranca mi app? 
- Llamando desde su navegador a un servidor web y solicitándole index.html


SERVIDOR WEB:
- Atender peticiones por HTTP: GET

Que es un proceso a nivel de SO que abre un puerto: 80, 4200, 8080, el que sea

Y hacemos desde un cliente un Request HTTP a una URL: 
GET http://localhost:4200/RUTA
                         ^

http://localhost:4200/index.html
http://localhost:4200/styles.css
http://localhost:4200/main.js
http://localhost:4200/images/avatar.png

El servidor web tiene configurado lo que se llama el DOCUMENT ROOT
    DOCUMENT_ROOT=c:\Usuarios\Felipe\suWeb\index.html
    DOCUMENT_ROOT=/Usuarios/Felipe/suWeb/index.html
    DOCUMENT_ROOT=/Usuarios/Felipe/suWeb/styles.css
    DOCUMENT_ROOT=/Usuarios/Felipe/suWeb/main.js
    DOCUMENT_ROOT=/Usuarios/Felipe/suWeb/images/avatar.png

El servidor web por defecto, tendrá configurados unos WELCOME FILES: index.html, index.htm...
Si alguien pide una carpeta sin especificar fichero, el servidor web buscará un fichero dentro de esa carpeta llamado como alguno de los WELCOME FILES y lo devuelve

POST? NO, NUNCA
PUT?  NO, NUNCA
DELETE? NO, NUNCA

A donde hacemos esas peticiones: A un backend





JAVA ... JAVA 11
MAVEN
    En la variable de entorno PATH, dar de alta la ruta donde hayais descomprimido maven: c:\maven\bin


PASOS Para poner en marcha el Backend:
1º git clone https://github.com/IvanciniGT/formacionSpringboot
2º entrais en la carpeta "consolidacion"
3: mvn clean install 
4: Entrais en la carpeta app
5: mvn spring-boot:run

