import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from './models/user.model';
import { UserService } from './services/user.service';
import { OnEditUserEvent } from './events/onedit.user.event';
import { BaseEvent } from './events/base.event';
import { OnEditCancelUserEvent } from './events/oneditcancel.user.event';
import { DatosModificablesUsuario } from './models/user.updatable.model';
import { OnUpdatedUserEvent } from './events/onupdated.user.event';

@Component({
  selector: 'usuario',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{

  user!: Usuario;
  enEdicion: boolean = false;

  @Input()
  id!: number;

  @Input()
  editable: boolean = false;

  readonly OnEditUserEvent = OnEditUserEvent;   // Simplemente para poder referirme a la clase OnEditUserEvent desde la plantilla
  readonly OnEditCancelUserEvent = OnEditCancelUserEvent;   // Simplemente para poder referirme a la clase OnEditUserEvent desde la plantilla
  readonly OnUpdatedUserEvent = OnUpdatedUserEvent;   // Simplemente para poder referirme a la clase OnEditUserEvent desde la plantilla
  readonly DatosModificablesUsuario = DatosModificablesUsuario;   // Simplemente para poder referirme a la clase OnEditUserEvent desde la plantilla

  @Output()
  onEdit = new EventEmitter<OnEditUserEvent>(); // Informamos que este componente puede lanzar eventos de tipo "onEdit"

  @Output()
  onEditCancel = new EventEmitter<OnEditCancelUserEvent>(); // Informamos que este componente puede lanzar eventos de tipo "onEdit"

  @Output()
  onUpdated = new EventEmitter<OnUpdatedUserEvent>(); // Informamos que este componente puede lanzar eventos de tipo "onEdit"


  constructor(private userService:UserService){ // Inyección de dependencias
  }
  
  // Esta función será llamada después del constructor, cuando nuestro componente se añada al DOM
  ngOnInit(): void {
    // Hacemos aquí la llamada al servicio de backend?
    this.user = this.userService.getUser(this.id);
  }

  procesarEvento(evento:BaseEvent){
    // Un punto de control para todos los eventos de mi componente
    // Logging
    // Control de autorizaciones
    if(evento instanceof OnEditUserEvent){
      this.#activarModoEdicion();
      this.onEdit.emit(evento)    // Comunicación hacia otros componentes
    }else if(evento instanceof OnEditCancelUserEvent){
      this.#detenerEdicion();
      this.onEditCancel.emit(evento)    // Comunicación hacia otros componentes
    }else if(evento instanceof OnUpdatedUserEvent){
      this.#actualizarDatosContacto(evento);
      this.onUpdated.emit(evento)    // Comunicación hacia otros componentes
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
    this.#detenerEdicion();
  }

  #detenerEdicion(){
    this.enEdicion = false;
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