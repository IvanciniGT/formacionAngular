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
      this.userService.getUser(this.id ).subscribe( 
        (datos) => { 
            try{
              this.usuarioRecibido(datos) 
            }catch (error){
                  alert(error)
            }
          }
      );
    //this.userService.getUser(this.id).subscribe( this.usuarioRecibido.bind(this) );
  }else  if(this.data){
      this.user = this.data;
    }else{
      throw new Error("Necesito un id o un data !!!!!")
    }
  }

  enCasoDeErrorAlRecuperarDatos(mensaje:string){
    //alert(mensaje)
  }

  usuarioRecibido(usuario:Usuario){
      console.log(usuario)
      this.user = usuario
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