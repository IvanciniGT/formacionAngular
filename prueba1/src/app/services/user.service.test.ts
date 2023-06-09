import { Injectable } from "@angular/core";
import { Usuario } from "../models/user.model";
import { DatosModificablesUsuario } from "../models/user.updatable.model";
import { UserService } from "./user.service";
import { Observable, of } from "rxjs";

@Injectable()
export class TestUserService{

  listado: Array<Usuario> = []

  constructor(){
    this.listado.push(crearUsuario(1,"Ivan", "Osuna", 44, "ivan@osuna.com", "123456789", "https://i.ytimg.com/vi/w8LKAJBB8-s/mqdefault.jpg"))
    this.listado.push(crearUsuario(2,"Felipe", "Osuna", 44, "ivan@osuna.com", "123456789", "https://i.ytimg.com/vi/w8LKAJBB8-s/mqdefault.jpg"))
    this.listado.push(crearUsuario(3,"Menchu", "Osuna", 44, "ivan@osuna.com", "123456789", "https://i.ytimg.com/vi/w8LKAJBB8-s/mqdefault.jpg"))
    this.listado.push(crearUsuario(4,"Manolo", "Osuna", 44, "ivan@osuna.com", "123456789", "https://i.ytimg.com/vi/w8LKAJBB8-s/mqdefault.jpg"))
    this.listado.push(crearUsuario(5,"Trini", "Osuna", 44, "ivan@osuna.com", "123456789", "https://i.ytimg.com/vi/w8LKAJBB8-s/mqdefault.jpg"))
  }

    getUsers(): Observable<Array<Usuario>> {
      return of(this.listado)
    }

    getUser(id:number, callback:Function = (mensaje:string) => {} ):Observable<Usuario | null>{     
      // TODO: Pondré la llamada al servicio web (que correrá en el backend)
        return of(this.listado[id])
    }

    deleteUser(user: Usuario) {
      // Cuando la implementemos de verdad... con el backend... la haremos asíncrona
      this.listado=this.listado?.slice(this.listado?.indexOf(user),this.listado.indexOf(user)+1)
    }
  
    updateUser(user: Usuario, datos:DatosModificablesUsuario) {
      // Cuando la implementemos de verdad... con el backend... la haremos asíncrona
      user.setEmail(datos.email)
      user.setTelefono(datos.telefono)
      // Hacer la peticion
    }
  
}

function crearUsuario(id: number, nombre: string, apellidos: string, edad: number, 
  email: string, telefono: string, foto: string): Usuario {
  var usuario = new Usuario();
  usuario.id = id;
  usuario.nombre = nombre;
  usuario.apellidos = apellidos;
  usuario.edad = edad;
  usuario.email = email;
  usuario.telefono = telefono;
  usuario.foto = foto;
  return usuario;
}
