import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { OnEditUserEvent } from './events/onedit.user.event';
import { BaseEvent } from './events/base.event';
import { OnEditCancelUserEvent } from './events/oneditcancel.user.event';
import { DatosModificablesUsuario } from '../../models/user.updatable.model';
import { OnUpdatedUserEvent } from './events/onupdated.user.event';
import { OnDeletionUserEvent } from './events/ondeletion.user.event';
import { OnDeletionCancelUserEvent } from './events/ondeletioncancel.user.event';
import { OnDeleteUserEvent } from './events/ondelete.user.event';
import { toUsuario } from 'src/app/mappers/UsuarioMapper';

@Component({
  selector: 'usuario',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{

  user!: Usuario;
  enEdicion: boolean = false;
  enBorrado: boolean = false;
  enError: boolean = false;

  @Input()
  id?: number;

  @Input()
  data?: Usuario;

  @Input()
  editable: boolean = false;

  @Input()
  borrable: boolean = false;

  readonly OnEditUserEvent = OnEditUserEvent;   // Simplemente para poder referirme a la clase OnEditUserEvent desde la plantilla
  readonly OnEditCancelUserEvent = OnEditCancelUserEvent;   // Simplemente para poder referirme a la clase OnEditUserEvent desde la plantilla
  readonly OnUpdatedUserEvent = OnUpdatedUserEvent;   // Simplemente para poder referirme a la clase OnEditUserEvent desde la plantilla

  readonly OnDeletionUserEvent = OnDeletionUserEvent; 
  readonly OnDeletionCancelUserEvent = OnDeletionCancelUserEvent;
  readonly OnDeleteUserEvent = OnDeleteUserEvent;  

  readonly DatosModificablesUsuario = DatosModificablesUsuario;   // Simplemente para poder referirme a la clase OnEditUserEvent desde la plantilla

  @Output()
  onEdit = new EventEmitter<OnEditUserEvent>(); // Informamos que este componente puede lanzar eventos de tipo "onEdit"

  @Output()
  onEditCancel = new EventEmitter<OnEditCancelUserEvent>(); // Informamos que este componente puede lanzar eventos de tipo "onEdit"

  @Output()
  onUpdated = new EventEmitter<OnUpdatedUserEvent>(); // Informamos que este componente puede lanzar eventos de tipo "onEdit"


  @Output()
  onDeletion = new EventEmitter<OnDeletionUserEvent>(); // Informamos que este componente puede lanzar eventos de tipo "onEdit"

  @Output()
  onDeletionCancel = new EventEmitter<OnDeletionCancelUserEvent>(); // Informamos que este componente puede lanzar eventos de tipo "onEdit"

  @Output()
  onDelete = new EventEmitter<OnDeleteUserEvent>(); // Informamos que este componente puede lanzar eventos de tipo "onEdit"


  constructor(private userService:UserService){ // Inyección de dependencias
  }
  
  // Esta función será llamada después del constructor, cuando nuestro componente se añada al DOM
  ngOnInit(): void {
    // Hacemos aquí la llamada al servicio de backend?
    if(this.id && ! this.data){                     /* Funcion de callback */ 
      this.userService.getUser(this.id ,  this.enCasoDeErrorAlRecuperarDatos.bind(this)    )
                                          // En este tipo de llamadas, se pierde la referencia al this = PUTADA !!!! = A GUARREAR PARA RESOLVERLO !!!!!
                                          //this.enCasoDeErrorAlRecuperarDatos.bind(this)
                                          //() => this.enCasoDeErrorAlRecuperarDatos()
                                          // Definir abajo la función como una lmabda (flecha)


/**                     ESTO ESTA DEPRECATED
      .subscribe( 
          (datos) => {                                                FUNCION SI VA BIEN
              this.usuarioRecibido(datos) 
          },
          ()=> {}                                                     FUNCION SI VA MAL
        );
        */

        /*
          ESTA LA TENEMOS DISPONIBLE  .... Y FUNCIONA GUAY !!!!!!!!
          Si bien... esta algo limitada... o es incomoda... si 
          siempre que se produzca el error quieres darle el mismo trámite... 
          o al menos una parte del tramite quieres que sea genérica
        */
       /*
       .subscribe( {
                      next: (datos) => {                                               // FUNCION SI VA BIEN
                          this.usuarioRecibido(datos) 
                      },
                      error: ()=> {
                        console.log("Error al recuperar el usuario. DESDE SUBSCRIBE.")                //  FUNCION SI VA MAL
                        // Aqui desactivar la barra de progreso... Pues si que tengo sitios desde donde llamo al desactivar...
                        // Que no hay que hacer mucho manto al componente !!!!
                      }

                    }
        );
        */
        .subscribe((usuario) => this.usuarioRecibido(usuario) )

    }else if(this.data){
      this.user = this.data;
    }else{
      throw new Error("Necesito un id o un data !!!!!")
    }
  }

  enCasoDeErrorAlRecuperarDatos(mensaje:string){
    console.log("Error al recuperar el usuario "+mensaje)        // Que tipo de código iría aquí? Relacionado con el componente USUARIO
    // Ojo, que cuando se llama a esta función, quien la llama, que no es esta clase...
    // no sabe quien es el this... El this de hecho es otro
    console.log(this)
    this.enError=true
  }

  usuarioRecibido(usuario:Usuario | null){
    if(usuario){
      console.log("Usuario recibido "+ usuario.id) // Esto es una gilipollez, pero aquí puede ser que necesitase hacer más cosas
      this.user = usuario
    }
    // Parar una barra de progreso que he montado
  }

  procesarEvento(evento:BaseEvent){
    // Un punto de control para todos los eventos de mi componente
    // Logging
    // Control de autorizaciones
    //switch(evento.constructor.name)

    if(evento instanceof OnEditUserEvent){
      this.#activarModoEdicion();
      this.onEdit.emit(evento)    // Comunicación hacia otros componentes
    }else if(evento instanceof OnEditCancelUserEvent){
      this.#detenerEdicion();
      this.onEditCancel.emit(evento)    // Comunicación hacia otros componentes
    }else if(evento instanceof OnUpdatedUserEvent){
      this.#actualizarDatosContacto(evento);
      this.onUpdated.emit(evento)    // Comunicación hacia otros componentes
    }else if(evento instanceof OnDeletionUserEvent){
      this.#activarModoBorrado();
      this.onDeletion.emit(evento)    // Comunicación hacia otros componentes
    }else if(evento instanceof OnDeletionCancelUserEvent){
      this.#detenerBorrado();
      this.onDeletionCancel.emit(evento)    // Comunicación hacia otros componentes
    }else if(evento instanceof OnDeleteUserEvent){
      this.#borrarUsuario(evento);  // Va a ser asíncrona???
      this.onDelete.emit(evento)    // Comunicación hacia otros componentes
    }
  }

  #activarModoEdicion(){ // Es una función privada del componente
    if(!this.editable){
      throw new Error("El usuario no es editable");
    }
    this.enEdicion = true;
  }

  #actualizarDatosContacto(evento:OnUpdatedUserEvent ){
    // Actualizará los datos... ya veremos cómo
    console.log("Nuevo Email", evento.newInfo.email)
    console.log("Nuevo Telefono", evento.newInfo.telefono)
    this.userService.updateUser(evento.user, evento.newInfo)
    //.when(nuevoUsuario => this.user)
    this.user.setEmail(evento.newInfo.email)
    this.user.setTelefono(evento.newInfo.telefono)
    // Esto o pedir de nuevo al servidor
    this.#detenerEdicion();
  }

  #detenerEdicion(){
    this.enEdicion = false;
  }

  #activarModoBorrado(){ // Es una función privada del componente
    if(!this.borrable){
      throw new Error("El usuario no es borrable");
    }
    this.enBorrado = true;
  }

  #borrarUsuario(evento:OnDeleteUserEvent ){
    // Actualizará los datos... ya veremos cómo
    console.log("Borramos el usuario", evento.user.nombre)
    this.userService.deleteUser(evento.user);
    this.#detenerBorrado();
  }

  #detenerBorrado(){
    this.enBorrado = false;
  }

}

/*

new UserComponent()... Donde está ese código? Quien lo escribe? YO NO.... revisad los archivos
Quién lo escribe? ANGULAR !
Cuando? 
Cuando se procesa el html: 
  <usuario [id]="1"></usuario>
Angular hace un new UserComponent()

ESTA ES LA INVERSION DE CONTROL !
*/