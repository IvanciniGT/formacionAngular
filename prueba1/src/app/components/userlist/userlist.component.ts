import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'listado-usuarios',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserListComponent implements OnInit{

  usuarios?:Array<Usuario>

  @Input()
  editables: boolean = false;
  @Input()
  borrables: boolean = false;

  usuarioSeleccionado?: Usuario

  constructor(private userService:UserService){ // Inyección de dependencias
  }
  
  // Esta función será llamada después del constructor, cuando nuestro componente se añada al DOM
  ngOnInit(): void {
    // Hacemos aquí la llamada al servicio de backend?
    this.userService.getUsers().subscribe(usuarios => {
      console.log("Recibido: ", usuarios)
      this.usuarios=usuarios
    });
  }

  setUsuarioSeleccionado(usuario?:Usuario){
    this.usuarioSeleccionado=usuario
  }
  resetearUsuarioSeleccionado(){
    this.setUsuarioSeleccionado()
  }

  usuarioBorrado(usuario:Usuario){
    // this.usuarios = this.userService.getUsers(); // Esto posiblemente es matar moscas a cañonazos
    // Tengo que hacer otra petición?? en serio???
    this.usuarios=this.usuarios?.slice(this.usuarios?.indexOf(usuario),this.usuarios?.indexOf(usuario)+1)
    // Estamos en disposición de hacer esto con el código? Me temo que no
  }
  // O al menos, no siempre, tal y como lo tenemos. Siempre y cuando el evento se lance cuando haya confirmación del borrado
  // Si no, podemos estar ocultando de la pantalla un dato que no se ha eliminado realmente
}

/*
a la hora de definir los campos en typescript:
!: Es el campo se requiere y no tengo que darle un valor por defecto
?: El campo puede quedar vacio
no poner nada: He de dar un valor por defecto.. o rellenar un valor en el constructor
*/