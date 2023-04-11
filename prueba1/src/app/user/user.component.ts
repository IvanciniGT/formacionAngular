import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'usuario',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{

  user!: Usuario;

  @Input()
  id: number = 1;

  constructor(private userService:UserService){ // Inyección de dependencias
  }
  
  // Esta función será llamada después del constructor, cuando nuestro componente se añada al DOM
  ngOnInit(): void {
    // Hacemos aquí la llamada al servicio de backend?
    this.user = this.userService.getUser(this.id);
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